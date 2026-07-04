<template lang="pug">
nuxt-link.flex.min-h-32.flex-col.justify-between.rounded-lg.border.border-zinc-200.bg-white.p-4.transition(
  :to="articleRoute(article)",
  class="hover:border-zinc-300 hover:bg-zinc-50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800",
  :class="dimmed ? 'opacity-60' : ''"
)
  span
    span.block.text-base.font-semibold.leading-snug.text-zinc-950(class="dark:text-white") {{ article.title }}
    span.mt-2.block.text-sm.leading-6.text-zinc-600(v-if="article.description" class="dark:text-zinc-300") {{ article.description }}
  span.mt-4.inline-flex.items-center.gap-2.text-sm.font-semibold.text-primary-700(class="dark:text-primary-400")
    span {{ actionLabel }}
    i.far.fa-arrow-right.text-xs(aria-hidden="true")
    span.ml-2.rounded-full.bg-red-50.px-2.text-xs.font-medium.text-red-600(
      v-if="showDeprecatedBadge && article.deprecated",
      class="py-0.5 dark:bg-red-950/50 dark:text-red-300"
    ) 지원 종료
</template>

<script setup>
import { articleRoute } from "../utils/category-meta";

defineProps({
  article: {
    type: Object,
    required: true,
  },
  dimmed: {
    type: Boolean,
    default: false,
  },
  showDeprecatedBadge: {
    type: Boolean,
    default: true,
  },
  actionLabel: {
    type: String,
    default: "자세히 보기",
  },
});
</script>
