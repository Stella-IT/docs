const getSectionPath = (id) => String(id || "").split("#")[0];

const toRoute = (id) => {
  const route = String(id || "").replace(/^\/ko(?=\/|#|$)/, "") || "/";
  return route.startsWith("#") ? `/${route}` : route;
};

const normalizeSearchText = (value) =>
  String(value || "")
    .replace(/html\s+\.(?:default\s+)?\.shiki\s+span\s*\{[^}]*\}/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

export default defineEventHandler(async (event) => {
  setHeader(event, "Cache-Control", "public, max-age=300, s-maxage=3600");

  const [sections, documents] = await Promise.all([
    queryCollectionSearchSections(event, "docs", {
      ignoredTags: ["style"],
      minHeading: "h1",
      maxHeading: "h3",
    }),
    queryCollection(event, "docs")
      .select("path", "title", "description", "category")
      .order("title", "ASC")
      .all(),
  ]);

  const docsByPath = new Map(
    documents.map((document) => [document.path, document]),
  );

  return sections.map((section) => {
    const document = docsByPath.get(getSectionPath(section.id));
    const title =
      document?.title || section.titles?.[0] || section.title || "제목 없음";
    const sectionTitle =
      section.title && section.title !== title ? section.title : "";
    const haystack = [
      ...new Set(
        [title, sectionTitle, document?.description, section.content]
          .map(normalizeSearchText)
          .filter(Boolean),
      ),
    ]
      .join(" ")
      .toLocaleLowerCase("ko-KR");

    return {
      id: section.id,
      to: toRoute(section.id),
      title,
      sectionTitle,
      category: document?.category || "",
      haystack,
    };
  });
});
