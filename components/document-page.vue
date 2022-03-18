<template lang="pug">
    div
        .title.my-10.text-center
            h1.text-3xl.font-bold {{ pageSlug.title }}
            h2.text-xl.font-medium.font-gray-800.mt-3 {{ pageSlug.description }}
        hr.mb-5

        nuxt-content.prose.max-w-none(class="dark:prose-dark lg:px-8" :document="pageSlug")

        hr.my-10
        a.flex.items-center.mb-10.text-blue-500(:href="`https://github.com/Stella-IT/docs/blob/master/content${pageSlug.path}.md`" target="_blank")
            i.fab.fa-github.text-gray-600.text-xl.mr-3
            p GitHub에서 수정하기
</template>

<script>
export default {
    name: "document-page",
    props: ["pageSlug"],
    data () {
        return {
            isLoading: true,
            articles: []
        }
    },
    async mounted () {
        
    }
}
</script>

<style lang="postcss" scoped>

</style>