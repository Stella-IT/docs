<template lang="pug">
div
  section.py-10.text-center(aria-labelledby="category-page-title", class="sm:py-14")
    p.text-sm.font-semibold.text-primary-600 제품별 도움말
    .mt-4.flex.items-center.justify-center.gap-3
      span.category-support-icon.inline-flex.items-center.justify-center.rounded-lg.bg-zinc-100.text-zinc-700(
        aria-hidden="true",
        class="dark:bg-zinc-800 dark:text-zinc-200"
      )
        i.text-xl(:class="currentCategoryMeta.icon")
      h1#category-page-title.text-3xl.font-semibold.tracking-tight.text-zinc-950(
        class="sm:text-4xl dark:text-white"
      ) {{ currentCategoryLabel }} 전체 문서
    p.mx-auto.mt-4.max-w-2xl.text-base.leading-7.text-zinc-600(
      class="sm:text-lg dark:text-zinc-300"
    ) {{ currentCategoryMeta.description }}
    .mt-5.flex.flex-wrap.items-center.justify-center.gap-3
      nuxt-link.inline-flex.items-center.gap-2.rounded-md.border.border-zinc-200.bg-white.px-4.py-2.text-sm.font-semibold.text-zinc-900.transition(
        to="/",
        class="hover:border-zinc-300 hover:bg-zinc-50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
      )
        i.far.fa-arrow-left.text-xs(aria-hidden="true")
        span 메인으로
      span.text-sm.text-zinc-500(class="dark:text-zinc-400") {{ articles.length }}개 문서

  section.border-t.border-zinc-200.pt-10(
    aria-labelledby="category-document-list-title",
    class="dark:border-zinc-800"
  )
    div(v-if="pending", role="status", aria-live="polite")
      .flex.justify-center.gap-2.items-center
        loading
        .text-xl.font-semibold 콘텐츠를 불러오는 중

    div(v-else)
      .mb-5.flex.items-end.justify-between.gap-4
        div
          p.text-sm.font-semibold.text-primary-600 전체 보기
          h2#category-document-list-title.mt-1.text-2xl.font-semibold.text-zinc-950(
            class="dark:text-white"
          ) 문서 목록
        span.hidden.text-sm.text-zinc-500(class="sm:block dark:text-zinc-400") {{ articles.length }}개 항목

      .mb-5.rounded-lg.border.border-amber-200.bg-amber-50.p-4(
        v-if="allArticlesDeprecated",
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

      .grid.gap-3(v-if="articles.length", class="md:grid-cols-2")
        document-link-card(
          v-for="article in articles",
          :key="article.path",
          :article="article",
          :dimmed="article.deprecated",
          :show-deprecated-badge="!allArticlesDeprecated"
        )

      p.rounded-lg.border.border-zinc-200.p-5.text-sm.text-zinc-600(
        v-else,
        class="dark:border-zinc-800 dark:text-zinc-400"
      ) 이 카테고리에 표시할 문서가 없습니다.
</template>

<script setup>
import { categoryLabel, categoryMeta } from "../utils/category-meta";

const props = defineProps(["pageSlug"]);

const { data, pending } = await useFetch("/api/docs-list", {
  key: "docs-list",
});

const currentCategoryMeta = computed(() => categoryMeta(props.pageSlug));
const currentCategoryLabel = computed(() => categoryLabel(props.pageSlug));

const articles = computed(() =>
  (data.value || [])
    .filter((article) => article.category === props.pageSlug)
    .sort(
      (a, b) =>
        Number(Boolean(a.deprecated)) - Number(Boolean(b.deprecated)) ||
        a.title.localeCompare(b.title, "ko-KR"),
    ),
);

const allArticlesDeprecated = computed(
  () =>
    articles.value.length > 0 &&
    articles.value.every((article) => article.deprecated),
);
</script>

<style lang="postcss" scoped>
.category-support-icon {
  width: 2.75rem;
  height: 2.75rem;
  min-width: 2.75rem;
}
</style>
