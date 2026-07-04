const decodeContentPath = (value) =>
  String(value || "")
    .split("~")
    .map(decodeURIComponent)
    .join("/");

export default defineEventHandler(async (event) => {
  setHeader(event, "Cache-Control", "public, max-age=300, s-maxage=3600");

  const slug = getRouterParam(event, "slug");
  if (!slug) return null;

  return queryCollection(event, "docs")
    .path(`/ko/${decodeContentPath(slug)}`)
    .first();
});
