export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "www.soniqweld.com" || url.hostname === "machine-tool.pages.dev") {
    url.hostname = "soniqweld.com";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
