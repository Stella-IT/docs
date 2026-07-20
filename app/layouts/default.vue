<template lang="pug">
div
  a.sr-only(
    href="#main-content",
    class="focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-700 focus:shadow-sm dark:focus:bg-zinc-900 dark:focus:text-primary-300"
  ) 본문으로 건너뛰기
  header.fixed.w-full.top-0.border-b.bg-zinc-50.border-zinc-100(
    style="z-index: 9999",
    class="dark:border-zinc-800 dark:bg-zinc-950/95"
  )
    nav.w-full.max-w-7xl.mx-auto.grid.items-center.gap-2.min-h-14.px-3(
      aria-label="주요 메뉴",
      class="grid-cols-[auto_minmax(0,1fr)_auto] md:px-6 lg:px-10 xl:px-16"
    )
      nuxt-link.logoArea.inline-flex.items-center(
        to="/",
        aria-label="Stella IT 고객센터 홈"
      )
        img.h-7(class="sm:h-8 dark:hidden", src="/logo-light.svg", alt="Stella IT")
        img.hidden.h-7(class="sm:h-8 dark:block", src="/logo-dark.svg", alt="Stella IT")
      .searchArea.w-full.max-w-lg.min-w-0.justify-self-center(class="xl:max-w-xl")
        search
      .iconArea.flex.justify-end.gap-1
        ColorScheme(tag="span")
          button.inline-flex.h-10.w-10.items-center.justify-center.rounded-sm.text-zinc-700.transition(
            type="button",
            :aria-label="themeToggleLabel",
            :title="themeToggleLabel",
            @click="toggleColorMode",
            class="hover:text-primary-600 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-zinc-300 dark:hover:text-primary-400"
          )
            i.fas(:class="themeIconClass", aria-hidden="true")
            span.sr-only {{ themeToggleLabel }}
        a.inline-flex.h-10.w-10.items-center.justify-center.rounded-sm.text-zinc-700.transition(
          href="https://github.com/Stella-IT/docs",
          target="_blank",
          rel="noopener noreferrer",
          aria-label="GitHub 저장소 새 창에서 열기",
          class="hover:text-primary-600 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-white dark:hover:text-primary-300"
        )
          i.fab.fa-github(aria-hidden="true")

  .h-16

  main#main-content.max-w-7xl.mx-auto.mb-5.px-3(
    class="md:px-6 lg:px-10 xl:px-16",
    tabindex="-1"
  )
    slot
</template>

<script setup>
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
const themeToggleLabel = computed(() =>
  isDark.value ? "라이트 모드로 전환" : "다크 모드로 전환",
);
const themeIconClass = computed(() => (isDark.value ? "fa-sun" : "fa-moon"));

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? "light" : "dark";
};
</script>

<style lang="postcss" scoped></style>
