<template lang="pug">
div
  .rounded-3xl.text-center.text-white.p-8.my-10(style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);")
    h1.text-4xl.font-bold.leading-normal.tracking-tight Stella IT 고객센터
    p Stella IT 제품과 서비스에 대한 도움말과 가이드를 제공합니다.

  h3.font-bold.text-2xl 제품별 도움말
  .flex.flex-col.mt-3#CategorySidebar(class="lg:flex-row")
    .flex.flex-col.w-full.mb-4(class="lg:min-w-64 lg:max-w-64 lg:mb-0")
      .flex.gap-2.overflow-x-auto(class="lg:flex-col lg:flex-nowrap lg:overflow-x-visible")
        template(v-for="category in categories" :key="category")
          .py-2.px-3.rounded-lg.transition-all.duration-200.cursor-pointer.select-none.text-center.whitespace-nowrap.flex.items-center.justify-center.gap-2(
            class="hover:bg-gray-200 lg:text-left lg:mb-2 lg:justify-start"
            @click="selectedCategory = category"
            :class="[selectedCategory === category ? 'bg-gray-300 font-bold' : '', deprecatedCategories.has(category) ? 'text-gray-400 line-through' : 'text-gray-700']"
          )
            span {{ category }}
            span(v-if="deprecatedCategories.has(category)" class="text-xs px-1.5 py-0.5 rounded bg-gray-200 text-gray-500 no-underline inline-block") 지원 종료
    .flex-grow(class="lg:ml-5")
      div(v-if="selectedCategory === ''")
        h2.text-xl.font-semibold.mt-0.mb-5 선택된 카테고리가 없습니다.
        p.text-gray-600 모든 카테고리에서 제공하는 도움말 문서
      div(v-else)
        h2.text-xl.font-semibold.mt-0.mb-5 {{ selectedCategory }} 카테고리의 도움말 문서
        //- deprecated 카테고리 경고 배너
        .rounded-lg.p-4.mb-4.border-l-4.border-amber-500.bg-amber-50(v-if="deprecatedCategories.has(selectedCategory)")
          .flex.items-start.gap-3
            .text-amber-500.text-xl ⚠️
            .flex-1
              .font-semibold.text-amber-800 이 기능은 더 이상 지원되지 않습니다
              .text-sm.text-amber-700.mt-1 해당 문서는 참고용으로만 제공되며, 새로운 설정이나 사용은 권장하지 않습니다.
        div(:class="deprecatedCategories.has(selectedCategory) ? 'opacity-60' : ''")
          div(v-for="article in articles" :key="article._path")
            nuxt-link(:to="article._path.replace('/ko', '')")
              .rounded.p-2.transition.flex.items-center.gap-2(class="hover:bg-indigo-100")
                span {{ article.title }}
                span(v-if="article.deprecated && !deprecatedCategories.has(selectedCategory)" class="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-medium") 지원 종료
            hr.my-2(v-if="articles.indexOf(article) !== articles.length - 1")
        .h-24
  hr

  .my-10.grid.grid-cols-1.gap-4(class="lg:grid-cols-3")
    a.flex.items-center.text-sm(
      href="https://stella-it.com/discord",
      target="_blank"
    )
      .community-icon.rounded-lg.bg-gray-800.flex.items-center.justify-center.mr-3
        i.fab.fa-discord.text-white.text-lg
      .flex.flex-col
        h2.font-bold.text-2xl Discord
        h3.text-gray-600 Stella IT 이용자들이 함께하는 커뮤니티에서 궁금한 것을 물어보세요.
    a.flex.items-center.text-sm(
      href="https://pf.stella-it.com",
      target="_blank"
    )
      .community-icon.rounded-lg.bg-green-600.flex.items-center.justify-center.mr-3
        i.fas.fa-user-headset.text-white.text-lg
      .flex.flex-col
        h2.font-bold.text-2xl 고객센터
        h3.text-gray-600 문서가 이해되지 않았다면, Stella IT 고객센터에서 궁금한 것을 물어보세요.
    a.flex.items-center.text-sm(
      href="https://console.stella-it.cloud",
      target="_blank"
    )
      .community-icon.rounded-lg.bg-black.flex.items-center.justify-center.mr-3
        i.fas.fa-terminal.text-white.text-lg
      .flex.flex-col
        h2.font-bold.text-2xl Console
        h3.text-gray-600 Stella IT Console에서 이용중인 모든 Stella IT 제품을 관리하세요.
</template>

<script setup>
const selectedCategory = ref("");
const categories = ref([]);
const articles = ref([]);
const deprecatedCategories = ref(new Set());

const getArticles = async () => {
  const posts = await queryContent("ko").find()
  articles.value = posts.filter(
    (v) => v.category && v.category.toLowerCase() == selectedCategory.value.toLowerCase(),
  );
}

const getCategories = async () => {
  const cats = new Set();
  const catArticles = new Map();
  const posts = await queryContent("ko").find()

  posts.forEach((article) => {
    if (article.category) {
      cats.add(article.category);
      if (!catArticles.has(article.category)) {
        catArticles.set(article.category, []);
      }
      catArticles.get(article.category).push(article);
    }
  });

  // 카테고리의 모든 문서가 deprecated인 경우 표시
  catArticles.forEach((articles, category) => {
    if (articles.length > 0 && articles.every(a => a.deprecated)) {
      deprecatedCategories.value.add(category);
    }
  });

  categories.value = Array.from(cats);
  selectedCategory.value = categories.value[0]
}

watch(selectedCategory, () => {
  getArticles();
});
getCategories();
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
