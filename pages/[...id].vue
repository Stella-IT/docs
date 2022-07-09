<template lang="pug">
div
    div(v-if="!page || page == 'index'")
        index-page
    div(v-if="page == 'category'")
        category-page(:pageSlug="pageSlug")
    div(v-if="page == 'document'")
        document-page(:pageSlug="pageSlug")
</template>

<script setup>
var pathSlug = useRoute().params.id
if(typeof pathSlug == 'object') pathSlug = pathSlug.join('/')
const page = ref(null)
const pageSlug = ref(null)
const title = ref("Stella IT Docs")
const description = ref("Stella IT Docs에서 다양한 정보들을 확인해보세요.")

if(!pathSlug || pathSlug == "") {
    page.value = "index"
} else if(pathSlug.startsWith("category/")) {
    page.value = "category"
    pageSlug.value = pathSlug.replace("category/", "")
} else {
    if(pathSlug.endsWith("/")) pathSlug = pathSlug.substring(0, pathSlug.length-1)
    const path = `/ko/${pathSlug}`
    const document = await queryContent(path).findOne()
    if (document) {
        page.value = "document"
        pageSlug.value = document
        title.value = document.title
        description.value = document.description
    }
}

useHead({
    title: title,
    meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
    ]
})
</script>

<style lang="postcss" scoped>

</style>
