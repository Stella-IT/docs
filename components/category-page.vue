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
                nuxt-link(:to="article.to")
                    .rounded.p-2.transition(class="hover:bg-indigo-100") {{ article.title }}
                hr.my-2

</template>

<script>
export default {
    name: "category-page",
    props: ["pageSlug"],
    data () {
        return {
            isLoading: true,
            articles: []
        }
    },
    async mounted () {
        const articles = (await this.$content("ko", { deep: true }).fetch()).filter(v => v.category && v.category.toLowerCase() == this.pageSlug.toLowerCase())
        console.log(articles)
        this.articles = articles
        this.isLoading = false
    }
}
</script>

<style lang="postcss" scoped>

</style>