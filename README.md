<div align="center">
  <h1>🏢 Adencon Engenharia & Avaliações Imobiliárias</h1>
  <p><strong>Sede Digital Corporativa de Alta Performance · Laudos Técnicos & Radiodifusão</strong></p>
  <p>
    <a href="https://github.com/frfernando/website-adencon"><img src="https://img.shields.io/badge/Status-Produção-22c55e?style=for-the-badge&logo=statuspage&logoColor=white" alt="Status" /></a>
    <a href="https://github.com/frfernando/website-adencon"><img src="https://img.shields.io/badge/Stack-Astro_7_+_Cloudflare-FF5F00?style=for-the-badge&logo=astro&logoColor=white" alt="Stack" /></a>
    <a href="https://github.com/frfernando/website-adencon"><img src="https://img.shields.io/badge/Performance-Lighthouse_98+-blueviolet?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Lighthouse" /></a>
  </p>
</div>

---

## 📌 Visão Geral do Estudo de Caso

A **Adencon Engenharia** é uma empresa especializada em avaliações imobiliárias patrimoniais (normas ABNT NBR 14.653 / IBAPE), perícias judiciais bancárias e engenharia consultiva em radiodifusão e telecomunicações.

Este projeto consistiu no redesign completo e implementação da **Sede Digital** da empresa, focando em máxima autoridade visual, velocidade extrema e conversão de propostas corporativas de alto ticket.

---

## 🔍 O Antes (O Desafio)

* **Baixa Velocidade de Resposta:** A infraestrutura anterior sofria com carregamento lento no mobile, prejudicando o acesso de peritos e engenheiros em campo.
* **Perda de Autoridade Perante Bancos e Tribunais:** A apresentação não comunicava com o rigor técnico exigido por instituições financeiras (Caixa, Banco do Brasil, Santander) e perícias da Justiça Federal.
* **Fricção na Solicitação de Laudos:** Clientes e advogados encontravam barreiras para solicitar orçamentos formais de avaliação patrimonial e estudos de viabilidade técnica.

---

## 💡 O Porquê (A Estratégia de Engenharia)

* **Por que Astro 7?**  
  Astro entrega uma arquitetura *Zero-JavaScript* por padrão. Para um portal institucional de engenharia, cada milissegundo conta para o índice de conversão e SEO orgânico. O HTML é pré-renderizado no servidor/build, eliminando o *hydration overhead* de frameworks tradicionais como React ou WordPress pesado.
* **Por que Cloudflare Pages na Borda?**  
  Deploy global em mais de 300 data centers mundiais com SSL Full Strict e CDN integrada. O tempo até o primeiro byte (TTFB) cai para menos de 50ms em qualquer localidade do Brasil.
* **Por que Estética Neobrutalista Corporativa?**  
  Bordas nítidas, contrastes bem definidos e tipografia estruturada transmitem precisão matemática, seriedade e conformidade com normas técnicas de engenharia.

---

## 🚀 O Depois (Resultados & Impacto)

| Métrica / Critério | Cenário Anterior | Sede Digital Adencon (Nova Versão) |
|---|---|---|
| **Tempo de Carregamento (Mobile)** | ~4.2 segundos | **⚡ &lt; 0.8 segundo** |
| **Pontuação Google Lighthouse** | 54 / 100 | **🏆 98+ / 100** |
| **Experiência do Usuário (UX)** | Layout genérico, difícil leitura | **Interfaces modulares com tabelas de serviços e laudos claros** |
| **Canal de Contato Direto** | E-mail demorado e formulário quebrado | **Botões inteligentes com triagem direta para o WhatsApp e E-mail comercial** |

---

## 🧰 Stack Tecnológica & Decisões de Arquitetura

* **Engine:** `Astro 7` (Islands Architecture & Static Generation)
* **Estilização:** `Tailwind CSS` com tokens customizados e tipografia fluida via `clamp()`
* **Tipagem:** `TypeScript` em componentes e utilitários
* **Hospedagem & Edge:** `Cloudflare Pages` (Serverless Global Edge)
* **Acessibilidade:** `WCAG 2.2 AA` (Alto contraste e navegação assistida)

---

## 🛠️ Como Executar o Projeto Localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/frfernando/website-adencon.git
cd website-adencon

# 2. Instalar dependências
npm install

# 3. Rodar em ambiente de desenvolvimento
npm run dev

# 4. Compilar para produção
npm run build
```

---

<div align="center">
  <p>Engenharia e Arquitetura desenvolvidas por <b><a href="https://github.com/frfernando">Fernando Reis</a></b> · <b><a href="https://sanbernarda.com">SanBernarda Studio</a></b></p>
</div>
