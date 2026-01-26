<template lang="pug">
div
  nav.fixed.w-full.top-0.h-14.border-b.w-full.bg-zinc-50.border-zinc-100(
    style="z-index: 9999"
  )
    .w-full.max-w-7xl.mx-auto.flex-none.flex.items-center.justify-between.h-full.px-3(
      class="md:px-6 lg:px-10 xl:px-16"
    )
      nuxt-link.logoArea(to="/")
        img.h-8(src="/logo-light.svg")
      .searchArea(class="w-4/6")
        search
      .iconArea
        a(href="https://github.com/Stella-IT/docs")
          i.fab.fa-github

  .h-16

  .max-w-7xl.mx-auto.mb-5.px-3(class="md:px-6 lg:px-10 xl:px-16")
    slot
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped></style>
