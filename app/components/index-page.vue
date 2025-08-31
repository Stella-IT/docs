<template lang="pug">
div
    .title.my-10
        h1.text-4xl.font-bold.leading-normal.tracking-tight.m-0 Stella IT와 함께 시작하기
        h2.text-xl.text-gray-600.mt-3 Stella IT 이용 가이드를 탐색하고, Stella IT 서비스의 이용 방법을 배우고, 이용 도중 발생한 문제를 해결하세요.

    hr

    .my-10.grid.grid-cols-1.gap-4(class="lg:grid-cols-2")
        .flex.flex-col.gap-5
            h2.font-bold.pt-5.text-3xl.mt-0.mb-0.tracking-tight 자주 찾는 질문
            h3.text-lg.mt-5.text-gray-500 Stella IT 이용 중 많은 고객분들이 자주 이용하시는 기능들의 설명과 고객센터나 커뮤니티를 통해 자주 질문해주셨던 질문들을 모았습니다.
            p.my-3
                nuxt-link(to="/category/faq")
                    button.w-full.flex-none.bg-gray-900.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-lg.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                        | 탐색하기
                        i.fal.fa-arrow-right.ml-2
            .flex
                span.tag.bg-gray-200.p-2.text-sm.rounded-lg.text-gray-500 Stella IT
                span.tag.bg-gray-200.p-2.text-sm.rounded-lg.text-gray-500 FAQ
                span.tag.bg-gray-200.p-2.text-sm.rounded-lg.text-gray-500 Console
                span.tag.bg-gray-200.p-2.text-sm.rounded-lg.text-gray-500 자주 찾는 질문
        img.w-full.h-auto.overflow-hidden.rounded-md.row-start-1(class="lg:row-start-auto" src="@/assets/img/index/faq_left.jpeg")
    
    hr

    .my-10.grid.grid-cols-1.gap-8(class="lg:grid-cols-3")
        .rounded-xl.bg-gradient-to-br.from-cyan-400.to-blue-500.p-5.text-white.flex.flex-col.gap-5
            h2.font-bold.text-2xl 마인크래프트 서버 운영 가이드
            h3 마인크래프트 서버 운영을 위한 꿀팁들을 모아 확인해보세요.
            .flex-grow
            nuxt-link(to="/category/tutorials/minecraft")
                button.w-full.flex-none.bg-gray-900.bg-opacity-20.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-lg.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                    | 지금 확인하기
                    i.fal.fa-arrow-right.ml-2
        .rounded-xl.bg-gradient-to-br.from-yellow-400.to-orange-500.p-5.text-white.flex.flex-col.gap-5
            h2.font-bold.text-2xl HTTP 서버 운영하기
            h3 처음 운영해보는 HTTP 서버, HTTP Proxy로 시작해보세요!
            .flex-grow
            nuxt-link(to="/category/tutorials/web")
                button.w-full.flex-none.bg-gray-900.bg-opacity-20.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-lg.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                    | 지금 확인하기
                    i.fal.fa-arrow-right.ml-2
        .rounded-xl.bg-gradient-to-br.from-green-400.to-green-600.p-5.text-white.flex.flex-col.gap-5
            h2.font-bold.text-2xl Stella IT Console 사용법
            h3 가이드와 함께하면 Stella IT Console 사용법 완벽 정복!
            .flex-grow
            nuxt-link(to="/category/faq/console")
                button.w-full.flex-none.bg-gray-900.bg-opacity-20.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-lg.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                    | 지금 확인하기
                    i.fal.fa-arrow-right.ml-2

    hr

    .my-10.grid.grid-cols-1.gap-4(class="lg:grid-cols-3")
        a.flex.items-center.text-sm(href="https://stella-it.com/discord" target="_blank")
            .community-icon.rounded-lg.bg-gray-800.flex.items-center.justify-center.mr-3
                i.fab.fa-discord.text-white.text-lg
            .flex.flex-col
                h2.font-bold.text-2xl Discord
                h3.text-gray-600 Stella IT 이용자들이 함께하는 커뮤니티에서 궁금한 것을 물어보세요.
        a.flex.items-center.text-sm(href="https://pf.stella-it.com" target="_blank")
            .community-icon.rounded-lg.bg-green-600.flex.items-center.justify-center.mr-3
                i.fas.fa-user-headset.text-white.text-lg
            .flex.flex-col
                h2.font-bold.text-2xl 고객센터
                h3.text-gray-600 문서가 이해되지 않았다면, Stella IT 고객센터에서 궁금한 것을 물어보세요.
        a.flex.items-center.text-sm(href="https://console.stella-it.cloud" target="_blank")
            .community-icon.rounded-lg.bg-black.flex.items-center.justify-center.mr-3
                i.fas.fa-terminal.text-white.text-lg
            .flex.flex-col
                h2.font-bold.text-2xl Console
                h3.text-gray-600 Stella IT Console에서 이용중인 모든 Stella IT 제품을 관리하세요.

    //- .secondGrid.my-10.grid.grid-cols-1(class="lg:grid-cols-2")
    //-     .px-5
    //-         img.w-full.h-auto.overflow-hidden.rounded-md(src="@/assets/img/index/minecraft_top.jpeg")
    //-         div
    //-             h1.text-2xl.font-bold 마인크래프트 서버 운영 가이드
    //-             h2.text-lg.font-gray-800.my-3 Stella IT에서 마인크래프트 서버 운영을 위한 꿀팁을 준비했습니다.
    //-             p
    //-                 .tag.inline.bg-gray-200.text-sm.p-2.rounded-lg.text-gray-500 Minecraft
    //-                 .tag.inline.bg-gray-200.text-sm.p-2.rounded-lg.text-gray-500 Java
    //-                 .tag.inline.bg-gray-200.text-sm.p-2.rounded-lg.text-gray-500 Spigot
    //-                 .tag.inline.bg-gray-200.text-sm.p-2.rounded-lg.text-gray-500 Votifier
    //-             p.my-3
    //-                 nuxt-link(to="/category/tutorials/minecraft")
    //-                     button.w-full.flex-none.bg-gray-900.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-xl.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
    //-                         | 탐색하기
    //-                         i.fal.fa-arrow-right.ml-2
    //-     .px-5
    //-         img.w-full.h-auto.overflow-hidden.rounded-md(src="@/assets/img/index/http_top.jpeg")
    //-         div
    //-             h1.text-2xl.font-bold HTTP 서버 구동하기
    //-             h2.text-lg.font-gray-800.my-3 Stella IT의 강력한 네트워크를 통해 웹 서버를 운영하는 방법을 알아보세요.
    //-             p
    //-                 .tag.inline.bg-gray-200.text-sm.p-2.rounded-lg.text-gray-500 Web
    //-                 .tag.inline.bg-gray-200.text-sm.p-2.rounded-lg.text-gray-500 Apache
    //-                 .tag.inline.bg-gray-200.text-sm.p-2.rounded-lg.text-gray-500 Nginx
    //-                 .tag.inline.bg-gray-200.text-sm.p-2.rounded-lg.text-gray-500 Node.js
    //-                 .tag.inline.bg-gray-200.text-sm.p-2.rounded-lg.text-gray-500 HTTP Proxy
    //-             p.my-3
    //-                 nuxt-link(to="/category/tutorials/web")
    //-                     button.w-full.flex-none.bg-gray-900.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-xl.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
    //-                         | 탐색하기
    //-                         i.fal.fa-arrow-right.ml-2


</template>

<script setup>

</script>

<style lang="postcss">
.community-icon {
    width: 50px;
    height: 50px;
    max-width: 50px;
    max-height: 50px;
    min-width: 50px;
    min-height: 50px;
    padding: 10px;
}

.tag + .tag {
    margin-left: 6px;
}
</style>