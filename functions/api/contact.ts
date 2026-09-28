/**
 * functions/api/contact.ts — Cloudflare Pages Function (padrão Resend SanBernarda)
 * Recebe o lead do formulário de contato, envia e-mail transacional via Resend
 * para o e-mail oficial da IMEA Radiodifusão e responde JSON.
 *
 * Env requerida no dashboard Cloudflare Pages → Settings → Variables:
 *   RESEND_API_KEY = re_... (chave master no cofre security/vault/agency-credentials.md)
 */

interface Env {
  RESEND_API_KEY?: string;
  /** Opcional: sobrescreve o destino padrão. Útil para staging/testes. */
  CONTACT_TO?: string;
}

// Tipo ambiente das Pages Functions (o deploy da Cloudflare fornece o runtime;
// esta declaração serve só p/ checagem local e editores).
declare type PagesFunction<Env = unknown> = (context: {
  request: Request;
  env: Env;
}) => Response | Promise<Response>;

const DEFAULT_DESTINO = 'imea.radiodifusao@hotmail.com';
const REMETENTE = 'IMEA Radiodifusão Site <notificacoes@sanbernarda.com>';

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHtml(data: Record<string, string>, origin: string): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #262626;"><span style="font-size:11px;text-transform:uppercase;color:#737373;font-weight:600;">${label}</span><div style="font-size:15px;color:#ffffff;font-weight:600;margin-top:2px;">${escapeHtml(value) || '—'}</div></td></tr>`;
  return `<!DOCTYPE html><html lang="pt-BR"><body style="margin:0;background-color:#0a0a0a;font-family:sans-serif;color:#f5f5f5;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;"><tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#121212;border:1px solid #262626;border-radius:16px;">
<tr><td height="4" style="background:linear-gradient(90deg,#10b981,#06b6d4);"></td></tr>
<tr><td style="padding:28px 28px 8px 28px;"><h1 style="margin:0;font-size:20px;color:#ffffff;">Novo lead: ${escapeHtml(data.name)}</h1>
<p style="margin:6px 0 0 0;font-size:12px;color:#737373;">Origem: IMEA Radiodifusão (${escapeHtml(origin)})</p></td></tr>
<tr><td style="padding:8px 28px 24px 28px;"><table width="100%" cellpadding="0" cellspacing="0">
${row('Nome', data.name)}${row('Telefone / WhatsApp', data.phone)}${row('E-mail', data.email)}${row('Emissora / UF', data.station)}${row('Assunto', data.subject)}${row('Mensagem', data.message)}
</table></td></tr>
<tr><td style="padding:0 28px 28px 28px;" align="center"><a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;background-color:#10b981;color:#000;font-weight:700;font-size:13px;text-decoration:none;padding:12px 28px;border-radius:8px;">Responder lead agora</a></td></tr>
</table></td></tr></table></body></html>`;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return json({ success: false, error: 'Serviço de e-mail não configurado.' }, 500);

  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return json({ success: false, error: 'Payload inválido.' }, 400);
  }

  // Honeypot anti-bot (campo invisível; se preenchido, é robô)
  if (data.website) return json({ success: true });

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const phone = (data.phone || '').trim();
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length < 8) {
    return json({ success: false, error: 'Dados inválidos. Confira nome, e-mail e telefone.' }, 422);
  }

  const origin = new URL(request.url).origin;
  const destino = env.CONTACT_TO || DEFAULT_DESTINO;
  const subject = `⚡ Novo lead IMEA Radiodifusão: ${name} — ${(data.subject || 'Contato').slice(0, 60)}`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: REMETENTE,
      to: [destino],
      reply_to: email,
      subject,
      html: buildHtml(data, origin),
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    return json({ success: false, error: `Falha no envio (${res.status}). Tente pelo WhatsApp.` }, 502);
  }

  const sent = (await res.json().catch(() => ({}))) as { id?: string };
  return json({ success: true, id: sent.id });
};
