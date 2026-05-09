export const preferredCategories = [
  "Stella IT Console",
  "Stella IT Console/Minecraft",
  "Stella IT HTTP Proxy",
  "Stella IT Accounts",
  "Stella IT Payments",
  "Stella IT Docs",
  "FAQ",
];

export const categoryMetaMap = {
  "Stella IT Console": {
    label: "Console",
    icon: "fas fa-terminal",
    description:
      "서버 생성, 원격 접속, 요금 설정처럼 콘솔 사용에 필요한 기본 문서입니다.",
  },
  "Stella IT Console/Minecraft": {
    label: "Minecraft",
    icon: "fas fa-cube",
    description: "마인크래프트 서버 설치, 최적화, 운영 문제 해결 문서입니다.",
  },
  "Stella IT HTTP Proxy": {
    label: "HTTP Proxy",
    icon: "fas fa-globe",
    description:
      "도메인 연결, SSL 인증서, HTTP Proxy 설정을 다루는 문서입니다.",
  },
  "Stella IT Accounts": {
    label: "Accounts",
    icon: "fas fa-user",
    description: "계정 인증과 로그인 과정에서 필요한 도움말입니다.",
  },
  "Stella IT Payments": {
    label: "Payments",
    icon: "fas fa-credit-card",
    description: "결제, 환불, 영수증 발급과 관련된 안내입니다.",
  },
  "Stella IT Docs": {
    label: "Docs",
    icon: "fas fa-book-open",
    description: "Stella IT 문서 사용과 기여 방법을 확인할 수 있습니다.",
  },
  FAQ: {
    label: "FAQ",
    icon: "fas fa-circle-question",
    description: "자주 묻는 질문을 주제별로 정리했습니다.",
  },
};

export const defaultCategoryMeta = {
  icon: "fas fa-folder",
  description: "이 카테고리에서 제공하는 도움말 문서입니다.",
};

export const categorySortIndex = (category) => {
  const index = preferredCategories.indexOf(category);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

export const categoryLabel = (category) => {
  if (categoryMetaMap[category]?.label) return categoryMetaMap[category].label;

  return String(category || "문서").replace(/^Stella IT\s*/, "");
};

export const categoryMeta = (category) => ({
  ...defaultCategoryMeta,
  label: categoryLabel(category),
  ...(categoryMetaMap[category] || {}),
});

export const articleRoute = (article) =>
  String(article?.path || "").replace(/^\/ko(?=\/|$)/, "") || "/";

export const categoryRoute = (category) =>
  `/category/${String(category || "")
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;

export const normalizeId = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-|-$/g, "");
