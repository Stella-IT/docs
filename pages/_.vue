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
        const pathSlug = params.pathMatch
        var result = {
            page: null,
            pageSlug: null
        }

        if(!pathSlug || pathSlug == "") {
            result.page = "index"
        } else if(pathSlug.startsWith("category/")) {
            result.page = "category"
            result.pageSlug = pathSlug.replace("category/", "")
        } else {
            const path = `/ko/${pathSlug}`
            const [document] = await $content({ deep: true }).where({ path }).fetch()
            if (document) {
                result.page = "document"
                result.pageSlug = document
            }
        }

        return result
    }
}
</script>

<style lang="postcss" scoped>

</style>