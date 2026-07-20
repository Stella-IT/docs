<template lang="pug">
div
  section.py-10.text-center(aria-labelledby="home-title", class="sm:py-14")
    p.text-sm.font-semibold.text-primary-600 Stella IT 고객센터
    h1#home-title.mx-auto.mt-4.max-w-3xl.text-4xl.font-semibold.tracking-tight.text-zinc-950(
      class="sm:text-5xl dark:text-white"
    ) 무엇을 도와드릴까요?
    p.mx-auto.mt-4.max-w-2xl.text-base.leading-7.text-zinc-600(
      class="sm:text-lg dark:text-zinc-300"
    ) Stella IT 제품과 서비스별 문서를 빠르게 찾아보세요.

  section.mt-2(aria-labelledby="quick-title")
    h2#quick-title.text-center.text-2xl.font-semibold.text-zinc-950(
      class="dark:text-white"
    ) 자주 찾는 도움말
    .mt-5.grid.gap-3(class="md:grid-cols-3")
      nuxt-link.flex.items-start.gap-4.rounded-lg.border.border-zinc-200.bg-white.p-4.transition(
        v-for="item in quickLinks",
        :key="item.to",
        :to="item.to",
        class="hover:border-zinc-300 hover:bg-zinc-50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
      )
        span.home-support-icon.inline-flex.items-center.justify-center.rounded-lg.bg-primary-50.text-primary-700(
          aria-hidden="true",
          class="dark:bg-primary-950/60 dark:text-primary-300"
        )
          i.text-lg(:class="item.icon")
        span.min-w-0
          span.block.font-semibold.leading-snug.text-zinc-950(class="dark:text-white") {{ item.title }}
          span.mt-1.block.text-sm.leading-6.text-zinc-600(class="dark:text-zinc-300") {{ item.description }}

  section.mt-12(aria-labelledby="category-title")
    h2#category-title.text-center.text-2xl.font-semibold.text-zinc-950(
      class="dark:text-white"
    ) 제품별 도움말
    .mt-6.grid.grid-cols-2.gap-3(
      role="tablist",
      aria-label="제품 카테고리",
      class="sm:grid-cols-3 lg:grid-cols-6"
    )
      button.home-category-card.flex.min-h-32.flex-col.items-center.justify-center.rounded-lg.border.p-4.text-center.transition(
        v-for="category in categories",
        :key="category",
        type="button",
        role="tab",
        ref="categoryButtons",
        :id="categoryTabId(category)",
        :aria-controls="categoryPanelId(category)",
        :aria-selected="selectedCategory === category",
        @click="selectedCategory = category",
        @keydown.right.prevent="focusAdjacentCategory(category, 1)",
        @keydown.down.prevent="focusAdjacentCategory(category, 1)",
        @keydown.left.prevent="focusAdjacentCategory(category, -1)",
        @keydown.up.prevent="focusAdjacentCategory(category, -1)",
        class="focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500",
        :class="[selectedCategory === category ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-sm dark:border-primary-400 dark:bg-primary-950/40 dark:text-primary-300' : 'border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800', deprecatedCategories.has(category) ? 'opacity-60' : '']"
      )
        span.home-support-icon.inline-flex.items-center.justify-center.rounded-lg.bg-zinc-100.text-zinc-700(
          aria-hidden="true",
          class="dark:bg-zinc-800 dark:text-zinc-200"
        )
          i.text-xl(:class="categoryMeta(category).icon")
        span.mt-3.block.text-base.font-semibold.leading-tight {{ categoryLabel(category) }}
        span.mt-1.block.text-xs.text-zinc-500(class="dark:text-zinc-400") {{ categoryCounts.get(category) || 0 }}개 문서
        span.mt-2.inline-flex.rounded-full.bg-zinc-100.px-2.text-xs.font-medium.text-zinc-500(
          v-if="deprecatedCategories.has(category)",
          class="py-0.5 dark:bg-zinc-800 dark:text-zinc-400"
        ) 지원 종료

  section.mt-14.border-t.border-zinc-200.pt-10(
    v-if="selectedCategory",
    :id="categoryPanelId(selectedCategory)",
    role="tabpanel",
    :aria-labelledby="categoryTabId(selectedCategory)",
    aria-live="polite",
    class="dark:border-zinc-800"
  )
    .grid.gap-8(class="lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)]")
      .min-w-0
        p.text-sm.font-semibold.text-primary-600 선택한 카테고리
        .mt-3.flex.items-center.gap-3
          span.home-support-icon.inline-flex.items-center.justify-center.rounded-lg.bg-zinc-100.text-zinc-700(
            aria-hidden="true",
            class="dark:bg-zinc-800 dark:text-zinc-200"
          )
            i.text-xl(:class="selectedCategoryMeta.icon")
          h2.text-3xl.font-semibold.tracking-tight.text-zinc-950(
            class="dark:text-white"
          ) {{ selectedCategoryLabel }}
        p.mt-4.leading-7.text-zinc-600(class="dark:text-zinc-300") {{ selectedCategoryMeta.description }}
        .mt-5.flex.flex-wrap.items-center.gap-3
          nuxt-link.inline-flex.items-center.gap-2.rounded-md.bg-zinc-950.px-4.py-2.text-sm.font-semibold.text-white.transition(
            :to="categoryRoute(selectedCategory)",
            class="hover:bg-zinc-800 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
          )
            span 전체 문서 보기
            i.far.fa-arrow-right.text-xs(aria-hidden="true")
          span.text-sm.text-zinc-500(class="dark:text-zinc-400") {{ articles.length }}개 문서

      .min-w-0
        .mb-4.rounded-lg.border.border-amber-200.bg-amber-50.p-4(
          v-if="deprecatedCategories.has(selectedCategory)",
          role="note",
          aria-label="지원 종료 안내",
          class="dark:border-amber-800 dark:bg-amber-950/40"
        )
          .flex.items-start.gap-3
            i.fas.fa-triangle-exclamation.text-amber-500(
              aria-hidden="true",
              class="mt-0.5"
            )
            .flex-1
              .font-semibold.text-amber-900(class="dark:text-amber-200") 이 기능은 더 이상 지원되지 않습니다
              .mt-1.text-sm.leading-6.text-amber-800(class="dark:text-amber-300") 해당 문서는 참고용으로만 제공되며, 새로운 설정이나 사용은 권장하지 않습니다.

        .grid.gap-3(v-if="featuredArticles.length", class="md:grid-cols-2")
          document-link-card(
            v-for="article in featuredArticles",
            :key="article.path",
            :article="article",
            :dimmed="deprecatedCategories.has(selectedCategory)",
            :show-deprecated-badge="!deprecatedCategories.has(selectedCategory)"
          )
        p.rounded-lg.border.border-zinc-200.p-5.text-sm.text-zinc-600(
          v-else,
          class="dark:border-zinc-800 dark:text-zinc-400"
        ) 이 카테고리에 표시할 문서가 없습니다.

  support-channel-section(
    :channels="supportChannels",
    title-id="support-channel-title"
  )
</template>

<script setup>
import {
  categoryLabel,
  categoryMeta,
  categoryRoute,
  categorySortIndex,
  normalizeId,
} from "../utils/category-meta";

const selectedCategory = ref("");
const categoryButtons = ref([]);

const quickLinks = [
  {
    title: "인스턴스 생성",
    description:
      "Stella IT Console에서 새 인스턴스를 만드는 방법을 확인합니다.",
    icon: "fas fa-server",
    to: "/faq/console/how-to-deploy-instance",
  },
  {
    title: "원격 접속",
    description: "RDP, SSH, noVNC 등 인스턴스 접속 방법을 찾아봅니다.",
    icon: "fas fa-display",
    to: "/faq/console/how-to-remote-access",
  },
  {
    title: "결제 수단 등록",
    description: "서비스 이용을 위한 결제 카드 등록 과정을 확인합니다.",
    icon: "fas fa-credit-card",
    to: "/faq/payments/how-to-set-billing-card",
  },
];

const supportChannels = [
  {
    title: "Discord",
    description:
      "Stella IT 이용자 커뮤니티에서 질문하고 답변을 나눌 수 있습니다.",
    icon: "fab fa-discord",
    iconBackground: "bg-indigo-600",
    href: "https://stella-it.com/discord",
  },
  {
    title: "고객센터",
    description: "문서로 해결되지 않는 문제는 고객센터로 문의하세요.",
    icon: "fas fa-user-headset",
    iconBackground: "bg-green-600",
    href: "https://pf.stella-it.com",
  },
  {
    title: "Console",
    description: "사용 중인 Stella IT 제품과 인스턴스를 관리합니다.",
    icon: "fas fa-terminal",
    iconBackground: "bg-zinc-950",
    href: "https://console.stella-it.cloud",
  },
];

const { data: posts } = await useFetch("/api/docs-list", {
  key: "docs-list",
});

const docs = computed(() => posts.value || []);
const categories = computed(() => {
  return Array.from(
    new Set(docs.value.map((article) => article.category).filter(Boolean)),
  ).sort((a, b) => {
    const aIndex = categorySortIndex(a);
    const bIndex = categorySortIndex(b);

    if (aIndex !== bIndex) return aIndex - bIndex;
    return categoryLabel(a).localeCompare(categoryLabel(b), "ko-KR");
  });
});

const categoryCounts = computed(() => {
  const counts = new Map();

  docs.value.forEach((article) => {
    if (!article.category) return;
    counts.set(article.category, (counts.get(article.category) || 0) + 1);
  });

  return counts;
});

const deprecatedCategories = computed(() => {
  const categoryArticles = new Map();

  docs.value.forEach((article) => {
    if (!article.category) return;
    if (!categoryArticles.has(article.category)) {
      categoryArticles.set(article.category, []);
    }
    categoryArticles.get(article.category).push(article);
  });

  return new Set(
    Array.from(categoryArticles.entries())
      .filter(
        ([, articles]) =>
          articles.length > 0 &&
          articles.every((article) => article.deprecated),
      )
      .map(([category]) => category),
  );
});

const articles = computed(() => {
  return docs.value
    .filter(
      (article) =>
        article.category &&
        article.category.toLowerCase() === selectedCategory.value.toLowerCase(),
    )
    .sort(
      (a, b) =>
        Number(Boolean(a.deprecated)) - Number(Boolean(b.deprecated)) ||
        a.title.localeCompare(b.title, "ko-KR"),
    );
});

const featuredArticles = computed(() => articles.value.slice(0, 6));
const selectedCategoryMeta = computed(() =>
  categoryMeta(selectedCategory.value),
);
const selectedCategoryLabel = computed(() =>
  categoryLabel(selectedCategory.value),
);

const categoryTabId = (category) => `category-tab-${normalizeId(category)}`;
const categoryPanelId = (category) => `category-panel-${normalizeId(category)}`;

const focusAdjacentCategory = async (category, direction) => {
  if (!categories.value.length) return;

  const currentIndex = categories.value.indexOf(category);
  const nextIndex =
    (currentIndex + direction + categories.value.length) %
    categories.value.length;

  selectedCategory.value = categories.value[nextIndex];
  await nextTick();
  categoryButtons.value[nextIndex]?.focus();
};

watch(
  categories,
  (value) => {
    if (!selectedCategory.value && value.length) {
      selectedCategory.value = value[0];
    }
  },
  { immediate: true },
);
</script>

<style lang="postcss" scoped>
.home-category-card {
  min-height: 8rem;
}

.home-support-icon {
  width: 2.75rem;
  height: 2.75rem;
  min-width: 2.75rem;
}
</style>
