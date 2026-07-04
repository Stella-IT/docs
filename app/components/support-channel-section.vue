<template lang="pug">
section.my-16.border-t.border-zinc-200.pt-10(:aria-labelledby="sectionTitleId" class="dark:border-zinc-800")
  .grid.gap-6(class="lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)]")
    .text-center(class="lg:text-left")
      p.text-sm.font-semibold.text-primary-600 지원 채널
      h2.mt-1.text-2xl.font-semibold.text-zinc-950(:id="sectionTitleId" class="dark:text-white") {{ title }}

    .grid.gap-2(class="md:grid-cols-3")
      a.group.flex.items-start.gap-3.rounded-lg.border.border-transparent.p-3.transition(
        v-for="channel in channels",
        :key="channel.href",
        :href="channel.href",
        target="_blank",
        rel="noopener noreferrer",
        :aria-label="`${channel.title} 새 창에서 열기`",
        class="hover:border-zinc-200 hover:bg-zinc-50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 dark:hover:border-zinc-800 dark:hover:bg-zinc-900"
      )
        span.support-channel-icon.inline-flex.items-center.justify-center.rounded-lg.text-white(
          :class="channel.iconBackground",
          aria-hidden="true"
        )
          i.text-base(:class="channel.icon")
        span.min-w-0
          span.block.font-semibold.leading-snug.text-zinc-950(class="dark:text-white") {{ channel.title }}
          span.mt-1.block.text-sm.leading-6.text-zinc-600(class="dark:text-zinc-300") {{ channel.description }}
</template>

<script setup>
const props = defineProps({
  channels: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: "추가 지원 채널",
  },
  titleId: {
    type: String,
    default: "support-channel-title",
  },
});

const sectionTitleId = computed(() => props.titleId);
</script>

<style lang="postcss" scoped>
.support-channel-icon {
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
}
</style>
