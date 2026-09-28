interface PagesMiddlewareContext {
  request: Request;
  next: () => Promise<Response>;
}

export const onRequest = async ({ request, next }: PagesMiddlewareContext): Promise<Response> => {
  const url = new URL(request.url);

  if (url.hostname === 'adencon.com.br' || url.hostname === 'www.adencon.com.br') {
    const destination = new URL(`https://imearadiodifusao.com.br${url.pathname}${url.search}`);
    return Response.redirect(destination.toString(), 301);
  }

  return next();
};
