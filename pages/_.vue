<template lang="pug">
    div
        div(v-if="!page || page == 'index'")
            index-page
        div(v-if="page == 'category'")
            category-page(:pageSlug="pageSlug")
        div(v-if="page == 'document'")
            document-page(:pageSlug="pageSlug")
</template>

<script>
export default {
    async asyncData ({ $content, store, app, params, error }) {
        var pathSlug = params.pathMatch
        var result = {
            page: null,
            pageSlug: null,
            title: "Stella IT Docs",
            description: "Stella IT Docs에서 다양한 정보들을 확인해보세요."
        }

        if(!pathSlug || pathSlug == "") {
            result.page = "index"
        } else if(pathSlug.startsWith("category/")) {
            result.page = "category"
            result.pageSlug = pathSlug.replace("category/", "")
        } else {
            if(pathSlug.endsWith("/") pathSlug = pathSlug.substring(0, pathSlug.length-1)
            const path = `/ko/${pathSlug}`
            const [document] = await $content({ deep: true }).where({ path }).fetch()
            if (document) {
                result.page = "document"
                result.pageSlug = document
                result.title = document.title
                result.description = document.description
            }
        }

        return result
    },
    head () {
        return {
            title: this.title,
            meta: [
                { hid: 'description', name: 'description', content: this.description },
                // Open Graph
                { hid: 'og:title', property: 'og:title', content: this.title },
                { hid: 'og:description', property: 'og:description', content: this.description },
                // Twitter Card
                { hid: 'twitter:title', name: 'twitter:title', content: this.title },
                { hid: 'twitter:description', name: 'twitter:description', content: this.description }
            ]
        }
    },
}
</script>

<style lang="postcss" scoped>

</style>
