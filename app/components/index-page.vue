<template lang="pug">
div
  .rounded-3xl.text-center.text-white.p-6.my-6(
    class="sm:p-8 sm:my-10",
    style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);"
  )
    h1.text-3xl.font-bold.leading-normal.tracking-tight(class="sm:text-4xl") Stella IT 고객센터
    p.mt-2.text-sm(class="sm:text-base") Stella IT 제품과 서비스에 대한 도움말과 가이드를 제공합니다.

  section(aria-labelledby="product-help-title")
    h2#product-help-title.font-bold.text-2xl 제품별 도움말
    .flex.flex-col.mt-3#CategorySidebar(class="lg:flex-row")
      nav.flex.flex-col.w-full.mb-4(
        class="lg:min-w-64 lg:max-w-64 lg:mb-0",
        aria-label="제품 카테고리"
      )
        .flex.gap-2.overflow-x-auto.pb-1(
          role="tablist",
          aria-orientation="horizontal",
          class="lg:flex-col lg:flex-nowrap lg:overflow-x-visible lg:pb-0"
        )
          template(v-for="category in categories" :key="category")
            button.py-2.px-3.rounded-lg.transition-all.duration-200.select-none.text-center.whitespace-nowrap.flex.items-center.justify-center.gap-2(
              type="button",
              role="tab",
              ref="categoryButtons",
              class="hover:bg-gray-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 lg:text-left lg:mb-2 lg:justify-start",
              :id="categoryTabId(category)",
              :aria-controls="categoryPanelId(category)",
              :aria-selected="selectedCategory === category",
              @click="selectedCategory = category",
              @keydown.right.prevent="focusAdjacentCategory(category, 1)",
              @keydown.down.prevent="focusAdjacentCategory(category, 1)",
              @keydown.left.prevent="focusAdjacentCategory(category, -1)",
              @keydown.up.prevent="focusAdjacentCategory(category, -1)",
              :class="[selectedCategory === category ? 'bg-gray-300 font-bold' : '', deprecatedCategories.has(category) ? 'text-gray-400 line-through' : 'text-gray-700']"
            )
              span {{ category }}
              span(v-if="deprecatedCategories.has(category)" class="text-xs px-1.5 py-0.5 rounded-sm bg-gray-200 text-gray-500 no-underline inline-block") 지원 종료
      .grow(class="lg:ml-5")
        div(
          role="tabpanel",
          :id="categoryPanelId(selectedCategory)",
          :aria-labelledby="categoryTabId(selectedCategory)",
          aria-live="polite"
        )
          div(v-if="selectedCategory === ''")
            h3.text-xl.font-semibold.mt-0.mb-5 선택된 카테고리가 없습니다.
            p.text-gray-600 모든 카테고리에서 제공하는 도움말 문서
          div(v-else)
            h3.text-xl.font-semibold.mt-0.mb-5 {{ selectedCategory }} 카테고리의 도움말 문서
            .rounded-lg.p-4.mb-4.border-l-4.border-amber-500.bg-amber-50(
              v-if="deprecatedCategories.has(selectedCategory)",
              role="note",
              aria-label="지원 종료 안내"
            )
              .flex.items-start.gap-3
                .text-amber-500.text-xl(aria-hidden="true") ⚠️
                .flex-1
                  .font-semibold.text-amber-800 이 기능은 더 이상 지원되지 않습니다
                  .text-sm.text-amber-700.mt-1 해당 문서는 참고용으로만 제공되며, 새로운 설정이나 사용은 권장하지 않습니다.
            div(:class="deprecatedCategories.has(selectedCategory) ? 'opacity-60' : ''")
              ul(role="list")
                li(v-for="article in articles" :key="article.path")
                  nuxt-link(:to="article.path.replace('/ko', '')")
                    .rounded-sm.p-2.transition.flex.items-center.gap-2(class="hover:bg-indigo-100")
                      span {{ article.title }}
                      span(v-if="article.deprecated && !deprecatedCategories.has(selectedCategory)" class="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-medium") 지원 종료
                  hr.my-2(v-if="articles.indexOf(article) !== articles.length - 1")
            .h-24
  hr

  section.my-10.grid.grid-cols-1.gap-4(
    class="md:grid-cols-2 lg:grid-cols-3",
    aria-label="추가 지원 채널"
  )
    a.flex.items-center.text-sm(
      href="https://stella-it.com/discord",
      target="_blank",
      rel="noopener noreferrer",
      aria-label="Discord 커뮤니티 새 창에서 열기"
    )
      .community-icon.rounded-lg.bg-gray-800.flex.items-center.justify-center.mr-3
        i.fab.fa-discord.text-white.text-lg(aria-hidden="true")
      .flex.flex-col
        h2.font-bold.text-2xl.leading-tight Discord
        p.text-gray-600 Stella IT 이용자들이 함께하는 커뮤니티에서 궁금한 것을 물어보세요.
    a.flex.items-center.text-sm(
      href="https://pf.stella-it.com",
      target="_blank",
      rel="noopener noreferrer",
      aria-label="고객센터 새 창에서 열기"
    )
      .community-icon.rounded-lg.bg-green-600.flex.items-center.justify-center.mr-3
        i.fas.fa-user-headset.text-white.text-lg(aria-hidden="true")
      .flex.flex-col
        h2.font-bold.text-2xl.leading-tight 고객센터
        p.text-gray-600 문서가 이해되지 않았다면, Stella IT 고객센터에서 궁금한 것을 물어보세요.
    a.flex.items-center.text-sm(
      href="https://console.stella-it.cloud",
      target="_blank",
      rel="noopener noreferrer",
      aria-label="Stella IT Console 새 창에서 열기"
    )
      .community-icon.rounded-lg.bg-black.flex.items-center.justify-center.mr-3
        i.fas.fa-terminal.text-white.text-lg(aria-hidden="true")
      .flex.flex-col
        h2.font-bold.text-2xl.leading-tight Console
        p.text-gray-600 Stella IT Console에서 이용중인 모든 Stella IT 제품을 관리하세요.
</template>

<script setup>
const selectedCategory = ref("");
const categoryButtons = ref([]);

const { data: posts } = await useAsyncData("docs-index", () =>
  queryCollection("docs").order("title", "ASC").all(),
);

const docs = computed(() => posts.value || []);
const categories = computed(() => {
  return Array.from(
    new Set(docs.value.map((article) => article.category).filter(Boolean)),
  );
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
      .filter(([, articles]) => articles.length > 0 && articles.every((article) => article.deprecated))
      .map(([category]) => category),
  );
});

const articles = computed(() => {
  return docs.value.filter(
    (article) =>
      article.category &&
      article.category.toLowerCase() === selectedCategory.value.toLowerCase(),
  );
});

const normalizeId = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-|-$/g, "");

const categoryTabId = (category) => `category-tab-${normalizeId(category)}`;
const categoryPanelId = (category) =>
  `category-panel-${normalizeId(category)}`;

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

<style lang="postcss">
.community-icon {
  width: 50px;
  height: 50px;
  max-width: 50px;
  max-height: 50px;
  min-width: 50px;
  min-height: 50px;
  padding: 10px;
}
</style>
