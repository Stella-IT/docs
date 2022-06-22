<template lang="pug">
    div
        .title.my-10.text-center
            h1.text-3xl.font-bold Stella IT Documents
            h2.text-xl.font-medium.font-gray-800.mt-3 Stella IT 이용 가이드를 탐색하고, 문제를 해결하세요.

        hr

        .firstViewContent.my-10.flex.flex-col-reverse.px-6(class="lg:flex-row")
            .flex-grow
                h1.text-2xl.font-bold 자주 찾는 질문
                h2.text-lg.font-gray-800.my-3 Stella IT 이용 중 많은 고객분들이 자주 질문해주셨던 질문들을 모았습니다.
                p
                    .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Stella IT
                    .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 FAQ
                    .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Console
                    .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 자주 찾는 질문
                p.my-3
                    nuxt-link(to="/category/faq")
                        button.w-full.flex-none.bg-gray-900.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-xl.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                            | 탐색하기
                            i.fal.fa-arrow-right.ml-2
            img.w-full.h-auto.overflow-hidden.rounded-md(src="~/assets/img/index/faq_left.jpeg")
        
        hr

        .secondGrid.my-10.grid.grid-cols-1(class="lg:grid-cols-2")
            .px-5
                img.w-full.h-auto.overflow-hidden.rounded-md(src="~/assets/img/index/minecraft_top.jpeg")
                div
                    h1.text-2xl.font-bold 마인크래프트 서버 운영 가이드
                    h2.text-lg.font-gray-800.my-3 Stella IT에서 마인크래프트 서버 운영을 위한 꿀팁을 준비했습니다.
                    p
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Minecraft
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Java
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Spigot
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Votifier
                    p.my-3
                        nuxt-link(to="/category/tutorials/minecraft")
                            button.w-full.flex-none.bg-gray-900.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-xl.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                                | 탐색하기
                                i.fal.fa-arrow-right.ml-2
            .px-5
                img.w-full.h-auto.overflow-hidden.rounded-md(src="~/assets/img/index/http_top.jpeg")
                div
                    h1.text-2xl.font-bold HTTP 서버 구동하기
                    h2.text-lg.font-gray-800.my-3 Stella IT의 강력한 네트워크를 통해 웹 서버를 운영하는 방법을 알아보세요.
                    p
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Web
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Apache
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Nginx
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Node.js
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 HTTP Proxy
                    p.my-3
                        nuxt-link(to="/category/tutorials/web")
                            button.w-full.flex-none.bg-gray-900.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-xl.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                                | 탐색하기
                                i.fal.fa-arrow-right.ml-2


</template>

<script>
export default {
    name: "index-page"
}
</script>

<style lang="postcss" scoped>
.tag + .tag {
    margin-left: 6px;
}
</style>