export default defineEventHandler(async (event) => {
  setHeader(event, "Cache-Control", "public, max-age=300, s-maxage=3600");

  return queryCollection(event, "docs")
    .select("path", "title", "description", "category", "deprecated")
    .order("title", "ASC")
    .all();
});
