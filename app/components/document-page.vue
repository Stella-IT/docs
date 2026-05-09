<template lang="pug">
div.grid.grid-cols-1.gap-8(:class="documentGridClass")
  article.min-w-0(
    :aria-labelledby="pageTitleId",
    :class="{ 'xl:col-start-2': hasTableOfContents }"
  )
    header.title.my-8.text-center(class="sm:my-10")
      h1.text-2xl.font-bold(class="sm:text-3xl" :id="pageTitleId") {{ props.pageSlug.title }}
      p.text-lg.font-medium.text-gray-700.mt-2(class="sm:text-xl") {{ props.pageSlug.description }}
      .mt-4.flex.justify-center
        button.inline-flex.items-center.gap-2.rounded-xs.text-sm.font-medium.text-gray-500.transition(
          type="button",
          class="hover:text-primary-600 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
          :disabled="copyState === 'copying'",
          :aria-label="copyButtonLabel",
          @click="copyForLlm"
        )
          i.fas(:class="copyIconClass" aria-hidden="true")
          span {{ copyButtonLabel }}
        p.sr-only(aria-live="polite") {{ copyStatusMessage }}
      //- .flex.items-center.justify-center.my-3.text-sm(v-if="commiters.length != 0")
      //-     .flex.overflow-hidden.mr-2(class="-space-x-1")
      //-         img.inline-block.h-5.w-5.rounded-full.ring-2.ring-white(v-for="item in commiters.slice(0, 3)" :src="item.icon")
      //-     p(v-if="commiters.length != 1") #[b= '{{ commiters[0]["name"] }}']님 외 {{ commiters.length-1 }}명이 이 문서를 작성했습니다.
      //-     p(v-else) #[b= '{{ commiters[0]["name"] }}']님이 이 문서를 작성했습니다.
      //- .text-sm.flex.justify-center.gap-2.items-center.my-3(v-else)
      //-     loading
      //-     span 기여자 불러오는 중

    hr.mb-5

    content-renderer.prose.max-w-none(
      v-if="props.pageSlug",
      class="dark:prose-invert",
      :class="{ 'lg:px-8': !hasTableOfContents }",
      :value="props.pageSlug"
    )
      template(#empty)
        p Content Not Found

    hr.my-10
    section.my-10.grid.grid-cols-1.gap-4(
      class="md:grid-cols-2 lg:grid-cols-3",
      aria-label="문서 관련 지원 채널"
    )
      a.flex.items-center.text-sm(
        href="https://stella-it.com/discord",
        target="_blank",
        rel="noopener noreferrer",
        aria-label="Discord 커뮤니티 새 창에서 열기"
      )
        .community-icon.rounded-lg.bg-gray-800.flex.items-center.justify-center.mr-3
          i.fab.fa-discord.text-white.text-lg(aria-hidden="true")
        .flex.flex-col
          h2.font-bold.text-2xl.leading-tight Discord
          p.text-gray-600 아직 잘 모르겠나요? Stella IT 이용자들이 함께하는 커뮤니티에서 궁금한 것을 물어보세요.
      a.flex.items-center.text-sm(
        href="https://pf.stella-it.com",
        target="_blank",
        rel="noopener noreferrer",
        aria-label="고객센터 새 창에서 열기"
      )
        .community-icon.rounded-lg.bg-green-600.flex.items-center.justify-center.mr-3
          i.fas.fa-user-headset.text-white.text-lg(aria-hidden="true")
        .flex.flex-col
          h2.font-bold.text-2xl.leading-tight 고객센터
          p.text-gray-600 문서가 이해되지 않았다면, Stella IT 고객센터에서 궁금한 것을 물어보세요.
      a.flex.items-center.text-sm(
        :href="`https://github.com/Stella-IT/docs/blob/master/content${pageSlug.path}.md`",
        target="_blank",
        rel="noopener noreferrer",
        aria-label="GitHub에서 이 문서 수정하기 새 창에서 열기"
      )
        .community-icon.rounded-lg.bg-black.flex.items-center.justify-center.mr-3
          i.fab.fa-github.text-white.text-lg(aria-hidden="true")
        .flex.flex-col
          h2.font-bold.text-2xl.leading-tight GitHub
          p.text-gray-600 잘못된 내용이 기재되어 있나요? GitHub에서 이 문서를 수정하세요.

  on-this-page(
    :toc="toc",
    :class="{ 'xl:col-start-3': hasTableOfContents }"
  )
</template>

<script setup>
import { buildLlmContent, writeTextToClipboard } from "../utils/llm-content";

const props = defineProps(["pageSlug"]);
const isLoading = ref(true);
const articles = ref([]);
const commiters = ref([]);
const toc = computed(() => props.pageSlug?.toc || props.pageSlug?.body?.toc);
const hasTableOfContents = computed(() =>
  (toc.value?.links || []).some(hasTocLink),
);
const documentGridClass = computed(() =>
  hasTableOfContents.value
    ? "xl:grid-cols-[minmax(0,1fr)_minmax(0,56rem)_minmax(0,1fr)] xl:gap-8"
    : "xl:grid-cols-1",
);
const pageTitleId = computed(
  () =>
    `document-title-${props.pageSlug?.path?.replace(/[^a-z0-9가-힣]+/gi, "-") || "page"}`,
);
const copyState = ref("idle");
const copyResetTimer = ref(null);

const copyButtonLabel = computed(() => {
  if (copyState.value === "copying") return "복사 중...";
  if (copyState.value === "success") return "복사됨";
  if (copyState.value === "error") return "복사 실패";
  return "AI에게 복사";
});

const copyIconClass = computed(() => {
  if (copyState.value === "success") return "fa-check text-green-600";
  if (copyState.value === "error")
    return "fa-triangle-exclamation text-red-500";
  return "fa-copy";
});

const copyStatusMessage = computed(() => {
  if (copyState.value === "success")
    return "LLM용 문서 내용이 클립보드에 복사되었습니다.";
  if (copyState.value === "error")
    return "클립보드 복사에 실패했습니다. 다시 시도해 주세요.";
  return "";
});

function hasTocLink(link) {
  if (link?.id && link?.text) return true;
  return (link?.children || []).some(hasTocLink);
}

const copyForLlm = async () => {
  if (copyState.value === "copying") return;
  if (copyResetTimer.value) clearTimeout(copyResetTimer.value);

  copyState.value = "copying";

  try {
    await writeTextToClipboard(buildLlmContent(props.pageSlug));
    copyState.value = "success";
  } catch (error) {
    console.error(error);
    copyState.value = "error";
  }

  copyResetTimer.value = setTimeout(() => {
    copyState.value = "idle";
  }, 2000);
};

onBeforeUnmount(() => {
  if (copyResetTimer.value) clearTimeout(copyResetTimer.value);
});

// const {data} = await this.$axios.get(`https://api.github.com/repos/Stella-IT/docs/commits?path=content${props.pageSlug.path}.md`)
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
  meta: [
    {
      hid: "description",
      name: "description",
      content: props.pageSlug.description,
    },
  ],
});
</script>
