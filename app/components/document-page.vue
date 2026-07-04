<template lang="pug">
.grid.grid-cols-1.gap-8(:class="documentGridClass")
  article.min-w-0(
    :aria-labelledby="pageTitleId",
    :class="{ 'xl:col-start-2': hasTableOfContents }"
  )
    header.title.my-8.text-center(class="sm:my-10")
      h1.text-2xl.font-bold(class="sm:text-3xl dark:text-white", :id="pageTitleId") {{ props.pageSlug.title }}
      p.text-lg.font-medium.text-gray-700.mt-2(class="sm:text-xl dark:text-gray-300") {{ props.pageSlug.description }}
      .mt-4.flex.justify-center
        button.inline-flex.items-center.gap-2.rounded-xs.text-sm.font-medium.text-gray-500.transition(
          type="button",
          class="hover:text-primary-600 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:text-gray-400 dark:hover:text-primary-400 dark:focus-visible:ring-offset-zinc-950",
          :disabled="copyState === 'copying'",
          :aria-label="copyButtonLabel",
          @click="copyForMarkdown"
        )
          i.fas(:class="copyIconClass", aria-hidden="true")
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

    hr.mb-5(class="dark:border-zinc-800")

    content-renderer.prose.max-w-none(
      v-if="props.pageSlug",
      class="dark:prose-invert",
      :class="{ 'lg:px-8': !hasTableOfContents }",
      :value="props.pageSlug"
    )
      template(#empty)
        p Content Not Found

    support-channel-section(
      :channels="documentSupportChannels",
      title-id="document-support-channel-title"
    )

  on-this-page(:toc="toc", :class="{ 'xl:col-start-3': hasTableOfContents }")
</template>

<script setup>
import {
  buildMarkdownContent,
  writeTextToClipboard,
} from "../utils/markdown-content";

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
  return "Markdown으로 복사";
});

const copyIconClass = computed(() => {
  if (copyState.value === "success") return "fa-check text-green-600";
  if (copyState.value === "error")
    return "fa-triangle-exclamation text-red-500";
  return "fa-copy";
});

const copyStatusMessage = computed(() => {
  if (copyState.value === "success")
    return "Markdown 문서 내용이 클립보드에 복사되었습니다.";
  if (copyState.value === "error")
    return "클립보드 복사에 실패했습니다. 다시 시도해 주세요.";
  return "";
});

const documentSupportChannels = computed(() => [
  {
    title: "Discord",
    description:
      "Stella IT 이용자 커뮤니티에서 질문하고 답변을 나눌 수 있습니다.",
    icon: "fab fa-discord",
    iconBackground: "bg-indigo-600",
    href: "https://stella-it.com/discord",
  },
  {
    title: "고객센터",
    description: "문서로 해결되지 않는 문제는 고객센터로 문의하세요.",
    icon: "fas fa-user-headset",
    iconBackground: "bg-green-600",
    href: "https://pf.stella-it.com",
  },
  {
    title: "GitHub",
    description: "잘못된 내용이 있다면 GitHub에서 이 문서를 수정하세요.",
    icon: "fab fa-github",
    iconBackground: "bg-zinc-950 dark:bg-white dark:text-zinc-950",
    href: `https://github.com/Stella-IT/docs/blob/master/content${props.pageSlug.path}.md`,
  },
]);

function hasTocLink(link) {
  if (link?.id && link?.text) return true;
  return (link?.children || []).some(hasTocLink);
}

const copyForMarkdown = async () => {
  if (copyState.value === "copying") return;
  if (copyResetTimer.value) clearTimeout(copyResetTimer.value);

  copyState.value = "copying";

  try {
    await writeTextToClipboard(buildMarkdownContent(props.pageSlug));
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

<style lang="postcss" scoped></style>
