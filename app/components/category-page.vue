<template lang="pug">
div
  .title.my-10.text-center
    h1.text-3xl.font-bold {{ pageSlug }}
    p.text-xl.font-medium.text-gray-800.mt-3 {{ pageSlug }}의 모든 문서들을 확인해보세요.

  hr.mb-5

  div(v-if="isLoading" role="status" aria-live="polite")
    .flex.justify-center.gap-2.items-center
      loading
      .text-xl.font-semibold 콘텐츠를 불러오는 중
  div(v-else)
    ul(role="list")
      li(v-for="article in articles" :key="article.path")
        nuxt-link(:to="article.path.replace('/ko', '')")
          .rounded-sm.p-2.transition.flex.items-center.gap-2(class="hover:bg-indigo-100")
            span {{ article.title }}
            span(v-if="article.deprecated" class="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-medium") 지원 종료
        hr.my-2
</template>

<script setup>
const props = defineProps(["pageSlug"]);

const isLoading = ref(true);

const { data } = await useAsyncData(
  `posts-list-${props.pageSlug}`,
  () =>
    queryCollection("docs")
      .where("category", "=", props.pageSlug)
      .order("title", "ASC")
      .all(),
);
const articles = computed(() => data.value || []);
isLoading.value = false;
</script>

<style lang="postcss" scoped></style>
