<template lang="pug">
div
  .title.my-10.text-center
    h1.text-3xl.font-bold {{ pageSlug }}
    h2.text-xl.font-medium.font-gray-800.mt-3 {{ pageSlug }}의 모든 문서들을 확인해보세요.

  hr.mb-5

  div(v-if="isLoading")
    .flex.justify-center.gap-2.items-center
      loading
      .text-xl.font-semibold 콘텐츠를 불러오는 중
  div(v-else)
    div(v-for="article in articles")
      nuxt-link(:to="article._path.replace('/ko', '')")
        .rounded.p-2.transition.flex.items-center.gap-2(class="hover:bg-indigo-100")
          span {{ article.title }}
          span.text-xs.px-2.py-0.5.rounded-full.bg-red-100.text-red-600.font-medium(v-if="article.deprecated") 지원 종료
      hr.my-2
</template>

<script setup>
const props = defineProps(["pageSlug"]);

const isLoading = ref(true);
const articles = ref([]);

const { data: posts } = await useAsyncData("posts-list", () =>
  queryContent("ko").find(),
);
articles.value = posts.value.filter(
  (v) => v.category && v.category.toLowerCase() == props.pageSlug.toLowerCase(),
);
// console.log(articles.value)
isLoading.value = false;
</script>

<style lang="postcss" scoped></style>
