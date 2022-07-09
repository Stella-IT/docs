<template lang="pug">
div
    .title.my-10.text-center
        h1.text-3xl.font-bold {{ props.pageSlug.title }}
        h2.text-xl.font-medium.text-gray-700.mt-2 {{ props.pageSlug.description }}
        //- .flex.items-center.justify-center.my-3.text-sm(v-if="commiters.length != 0")
        //-     .flex.overflow-hidden.mr-2(class="-space-x-1")
        //-         img.inline-block.h-5.w-5.rounded-full.ring-2.ring-white(v-for="item in commiters.slice(0, 3)" :src="item.icon")
        //-     p(v-if="commiters.length != 1") #[b= '{{ commiters[0]["name"] }}']님 외 {{ commiters.length-1 }}명이 이 문서를 작성했습니다.
        //-     p(v-else) #[b= '{{ commiters[0]["name"] }}']님이 이 문서를 작성했습니다.
        //- .text-sm.flex.justify-center.gap-2.items-center.my-3(v-else)
        //-     loading
        //-     span 기여자 불러오는 중

    hr.mb-5

    content-renderer.prose.max-w-none(class="dark:prose-dark lg:px-8" :value="props.pageSlug")
        template(#empty)
            p Content Not Found

    hr.my-10
    a.flex.items-center.mb-10.text-blue-500(:href="`https://github.com/Stella-IT/docs/blob/master/content${props.pageSlug._path}.md`" target="_blank")
        i.fab.fa-github.text-gray-600.text-xl.mr-3
        p GitHub에서 수정하기
</template>

<script setup>
const props = defineProps(["pageSlug"])
const isLoading = ref(true)
const articles = ref([])
const commiters = ref([])


// const {data} = await this.$axios.get(`https://api.github.com/repos/Stella-IT/docs/commits?path=content${props.pageSlug._path}.md`)
// let duplicate = []
// for (const item of data) {
//     if (!duplicate.includes(item.author.login)) {
//         duplicate.push(item.author.login)
//         this.commiters.push({ id: item.author.id, name: item.author.login, icon: item.author.avatar_url })
//     }
// }


useHead({
    title: props.pageSlug.title,
    description: props.pageSlug.description,
    meta: [ { hid: "description", name: "description", content: props.pageSlug.description } ]
})
</script>

<style lang="postcss" scoped>

</style>