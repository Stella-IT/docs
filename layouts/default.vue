<template lang="pug">
    div
        nav.fixed.w-full.top-0.h-14.border-b.w-full.backdrop-blur-md(style="background-color: rgba(241,245,249, .6); z-index: 9999;")
            .w-full.max-w-7xl.mx-auto.flex-none.flex.items-center.justify-between.h-full.px-3(class="md:px-6 lg:px-10 xl:px-16")
                nuxt-link.logoArea(to="/")
                    img.h-8(src="/logo-light.svg")
                .searchArea(class="w-4/6")
                    search
                    //- .relative
                    //-     i.far.fa-search.absolute.left-3.transform.text-gray-400(class="top-1/2 -translate-y-1/2")
                    //-     input.w-full.text-sm.text-black.placeholder-gray-500.border.border-gray-200.rounded-md.py-2.pl-10(class="focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none" placeholder="Stella IT 문서 검색")
                .iconArea
                    a(href="https://github.com/Stella-IT/docs")
                        i.fab.fa-github
        
        .h-16
        
        .max-w-7xl.mx-auto.mb-5.px-3(class="md:px-6 lg:px-10 xl:px-16")
            nuxt
</template>

<script>
export default {
    
}
</script>

<style lang="postcss" scoped>

</style>