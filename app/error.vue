<template lang="pug">
.min-h-screen.overflow-hidden.bg-white.text-zinc-950
  .pointer-events-none.fixed.inset-0.-z-10
    .absolute.top-0.h-72.w-72.rounded-full.bg-primary-100.blur-3xl(class="left-1/2 -translate-x-1/2")
    .absolute.bottom-0.right-0.h-80.w-80.rounded-full.bg-sky-100.blur-3xl

  header.border-b.border-zinc-100.backdrop-blur(class="bg-white/85")
    nav.mx-auto.flex.h-16.w-full.max-w-7xl.items-center.justify-between.px-4(class="md:px-6 lg:px-10 xl:px-16" aria-label="오류 페이지 메뉴")
      nuxt-link.inline-flex.items-center(to="/" aria-label="Stella IT 고객센터 홈")
        img.h-8(src="/logo-light.svg" alt="Stella IT")
      a.inline-flex.items-center.gap-2.rounded-full.border.border-zinc-200.px-4.py-2.text-sm.font-semibold.text-zinc-700.transition(
        href="https://github.com/Stella-IT/docs/issues"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500"
      )
        i.fa-regular.fa-circle-question(aria-hidden="true")
        span 문의하기

  main.mx-auto.flex.w-full.max-w-5xl.items-center.px-4.py-16(class="min-h-[calc(100vh-4rem)] md:px-6 lg:px-10")
    section.w-full.rounded-4xl.border.border-zinc-100.bg-white.p-6(class="shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10 lg:p-14" aria-labelledby="error-title")
      .grid.items-center.gap-10(class="lg:grid-cols-[1fr_0.8fr]")
        .space-y-8
          .inline-flex.items-center.gap-2.rounded-full.bg-primary-50.px-4.py-2.text-sm.font-semibold.text-primary-700
            span.flex.h-2.w-2.rounded-full.bg-primary-500
            span {{ statusCode }} 오류

          .space-y-4
            h1#error-title.text-4xl.font-bold.tracking-tight.text-zinc-950(class="sm:text-5xl") {{ title }}
            p.max-w-2xl.text-lg.leading-8.text-zinc-600 {{ description }}

          .flex.flex-col.gap-3(class="sm:flex-row")
            button.inline-flex.items-center.justify-center.gap-2.rounded-full.bg-primary-600.px-6.py-3.text-sm.font-semibold.text-white.shadow-sm.transition(
              type="button"
              class="hover:bg-primary-700 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              @click="goHome"
            )
              i.fa-solid.fa-house(aria-hidden="true")
              span 홈으로 이동
            button.inline-flex.items-center.justify-center.gap-2.rounded-full.border.border-zinc-200.bg-white.px-6.py-3.text-sm.font-semibold.text-zinc-700.transition(
              type="button"
              class="hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              @click="goBack"
            )
              i.fa-solid.fa-arrow-left(aria-hidden="true")
              span 이전 페이지

          .rounded-2xl.border.border-zinc-100.bg-zinc-50.p-5.text-sm.leading-6.text-zinc-600
            strong.block.text-zinc-900 문서 주소가 바뀌었을 수 있어요.
            span 검색 또는 홈 화면에서 필요한 문서를 다시 찾아보세요. 기존 #[code /ko/...] 주소는 새 주소로 자동 이동됩니다.

        .relative.hidden(class="lg:block" aria-hidden="true")
          .absolute.inset-0.rounded-full.bg-primary-100.blur-3xl
          .relative.mx-auto.flex.aspect-square.max-w-xs.items-center.justify-center.rounded-4xl.border.border-primary-100.bg-linear-to-br.from-white.to-primary-50.shadow-inner
            .text-center
              .text-8xl.font-black.text-primary-600 {{ statusCode }}
              .mt-3.text-sm.font-semibold.uppercase.text-primary-700(class="tracking-[0.3em]") Not Found
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const statusCode = computed(() => props.error?.statusCode || 500);
const isNotFound = computed(() => statusCode.value === 404);
const title = computed(() =>
  isNotFound.value ? "문서를 찾을 수 없습니다" : "오류가 발생했습니다",
);
const description = computed(() =>
  isNotFound.value
    ? "요청하신 문서가 존재하지 않거나 이동되었습니다. 아래 버튼으로 고객센터 홈으로 돌아가 다시 탐색해 주세요."
    : "요청을 처리하는 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
);

useHead({
  title: () => `${statusCode.value} - ${title.value}`,
});

const goHome = () => clearError({ redirect: "/" });
const goBack = () => {
  if (import.meta.client && window.history.length > 1) {
    window.history.back();
    return;
  }

  clearError({ redirect: "/" });
};
</script>
