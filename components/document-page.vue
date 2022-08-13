<template lang="pug">
    div
        .title.my-10.text-center
            h1.text-3xl.font-bold {{ pageSlug.title }}
            h2.text-xl.font-medium.text-gray-700.mt-2 {{ pageSlug.description }}
            .flex.items-center.justify-center.my-3.text-sm(v-if="commiters.length != 0")
                .flex.overflow-hidden.mr-2(class="-space-x-1")
                    img.inline-block.h-5.w-5.rounded-full.ring-2.ring-white(v-for="item in commiters.slice(0, 3)" :src="item.icon")
                p(v-if="commiters.length != 1") #[b= '{{ commiters[0]["name"] }}']님 외 {{ commiters.length-1 }}명이 이 문서를 작성했습니다.
                p(v-else) #[b= '{{ commiters[0]["name"] }}']님이 이 문서를 작성했습니다.
            .text-sm.flex.justify-center.gap-2.items-center.my-3(v-else)
                loading
                span 기여자 불러오는 중

        hr.mb-5

        nuxt-content.prose.max-w-none(class="dark:prose-dark lg:px-8" :document="pageSlug")

        hr.my-10
        .my-10.grid.grid-cols-1.gap-4(class="lg:grid-cols-3")
            a.flex.items-center.text-sm(href="https://stella-it.com/discord" target="_blank")
                .community-icon.rounded-lg.bg-gray-800.flex.items-center.justify-center.mr-3
                    i.fab.fa-discord.text-white.text-lg
                .flex.flex-col
                    h2.font-bold.text-2xl Discord
                    h3.text-gray-600 아직 잘 모르겠나요? Stella IT 이용자들이 함께하는 커뮤니티에서 궁금한 것을 물어보세요.
            a.flex.items-center.text-sm(href="https://stella-it.channel.io" target="_blank")
                .community-icon.rounded-lg.bg-green-600.flex.items-center.justify-center.mr-3
                    i.fas.fa-user-headset.text-white.text-lg
                .flex.flex-col
                    h2.font-bold.text-2xl 고객센터
                    h3.text-gray-600 문서가 이해되지 않았다면, Stella IT 고객센터에서 궁금한 것을 물어보세요.
            a.flex.items-center.text-sm(:href="`https://github.com/Stella-IT/docs/blob/master/content${this.pageSlug.path}.md`" target="_blank")
                .community-icon.rounded-lg.bg-black.flex.items-center.justify-center.mr-3
                    i.fab.fa-github.text-white.text-lg
                .flex.flex-col
                    h2.font-bold.text-2xl GitHub
                    h3.text-gray-600 잘못된 내용이 기재되어 있나요? GitHub에서 이 문서를 수정하세요.
</template>

<script>
export default {
    head () {
        return {
            title: this.pageSlug.title,
            description: this.pageSlug.description,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.pageSlug.description
                }
            ]
        }
    },
    name: "document-page",
    props: ["pageSlug"],
    data () {
        return {
            isLoading: true,
            articles: [],
            commiters: []
        }
    },
    mounted () {
        this.getContributors()
    },
    methods: {
        async getContributors() {
            const {data} = await this.$axios.get(`https://api.github.com/repos/Stella-IT/docs/commits?path=content${this.pageSlug.path}.md`)
            let duplicate = []
            for (const item of data) {
                if (!duplicate.includes(item.author.login)) {
                    duplicate.push(item.author.login)
                    this.commiters.push({ id: item.author.id, name: item.author.login, icon: item.author.avatar_url })
                }
            }
        }
    }
}
</script>

<style lang="postcss" scoped>

</style>