<template lang="pug">
.w-full.relative.flex.flex-col.justify-between
  .w-full.relative(
    @keydown.down.prevent="increment",
    @keydown.up.prevent="decrement",
    @keydown.enter.prevent="go",
    @keydown.esc="closeResults"
  )
    label.sr-only(:for="searchInputId") 검색
    .relative
      i.far.fa-search.absolute.left-3.transform.text-zinc-400(
        class="top-1/2 -translate-y-1/2",
        aria-hidden="true"
      )
      input.block.w-full.pl-10.pr-3.py-2.truncate.leading-5.placeholder-zinc-500.border.border-transparent.text-zinc-700.rounded-md.bg-zinc-200(
        :id="searchInputId",
        ref="searchInput",
        :value="q",
        role="combobox",
        aria-autocomplete="list",
        :aria-controls="resultsListId",
        :aria-expanded="isOpen",
        :aria-activedescendant="activeDescendant",
        @input="updateQuery",
        class="dark:text-white dark:focus:text-white focus:border-zinc-300 dark:focus:border-zinc-700 focus:outline-hidden focus:bg-white dark:focus:bg-zinc-900 dark:bg-zinc-800",
        :class="{ 'rounded-b-none': isOpen }",
        placeholder="문서를 검색해보세요.",
        type="search",
        autocomplete="off",
        @focus="onFocus",
        @blur="onBlur"
      )
  ul.z-10.absolute.w-full.flex-1.top-0.max-h-96.overflow-x-hidden.overflow-y-auto.bg-white.rounded-md.border.border-zinc-300(
    v-show="isOpen",
    :id="resultsListId",
    role="listbox",
    aria-label="검색 결과",
    class="dark:bg-zinc-900 dark:border-zinc-700",
    :class="{ 'rounded-t-none': isOpen }",
    style="margin-top: 37px"
  )
    li.px-4.py-2.flex.gap-2(v-if="searching && !results.length" role="option" aria-disabled="true")
      loading
      span 검색 중..
    li.px-4.py-2.text-sm.text-zinc-500(
      v-else-if="q && !results.length",
      role="option",
      aria-disabled="true"
    ) 검색 결과가 없습니다.
    li(
      v-for="(result, index) of results",
      :key="result.id",
      :id="optionId(index)",
      role="option",
      :aria-selected="focusIndex === index",
      @mouseenter="focusIndex = index"
    )
      nuxt-link.flex.min-w-0.px-4.py-2.items-center.leading-5.transition.ease-in-out.duration-150(
        :to="result.to",
        :class="{ 'text-primary-500 bg-zinc-200 dark:bg-zinc-800': focusIndex === index }",
        @mousedown.prevent="selectResult(result)",
        @click="closeResults"
      )
        span.hidden.shrink-0.max-w-24.truncate.font-bold(
          v-if="result.category",
          class="lg:block"
        ) {{ result.category }}
        i.far.fa-arrow-right.mx-3.hidden.shrink-0(
          v-if="result.category",
          class="lg:block",
          aria-hidden="true"
        )
        span.block.min-w-0.flex-1.truncate
          span {{ result.title }}
          span(v-if="result.sectionTitle")  - {{ result.sectionTitle }}
  p.sr-only(aria-live="polite") {{ statusMessage }}
</template>

<script setup>
const emit = defineEmits(["focus"]);
const router = useRouter();

const q = ref("");
const focus = ref(false);
const focusIndex = ref(-1);
const searchInput = ref(null);
const searchInputId = "site-search";
const resultsListId = "site-search-results";

const { data: sections, pending: sectionsPending } = await useAsyncData(
  "docs-search-sections",
  () =>
    queryCollectionSearchSections("docs", {
      ignoredTags: ["code"],
      minHeading: "h1",
      maxHeading: "h3",
    }),
);

const { data: documents } = await useAsyncData("docs-search-documents", () =>
  queryCollection("docs")
    .select("path", "title", "description", "category")
    .order("title", "ASC")
    .all(),
);

const docsByPath = computed(() => {
  return new Map((documents.value || []).map((document) => [document.path, document]));
});

const query = computed(() => q.value.trim().toLocaleLowerCase("ko-KR"));
const searching = computed(() => Boolean(query.value && sectionsPending.value));

const preparedSections = computed(() => {
  return (sections.value || []).map((section) => {
    const path = getSectionPath(section.id);
    const document = docsByPath.value.get(path);
    const title = document?.title || section.titles?.[0] || section.title || "제목 없음";
    const sectionTitle = section.title && section.title !== title ? section.title : "";

    return {
      id: section.id,
      to: toRoute(section.id),
      title,
      sectionTitle,
      category: document?.category || "",
      content: section.content || document?.description || "",
      haystack: [title, sectionTitle, document?.description, section.content]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("ko-KR"),
    };
  });
});

const results = computed(() => {
  if (!query.value) return [];

  return preparedSections.value
    .map((result) => {
      const titleHit = result.title.toLocaleLowerCase("ko-KR").includes(query.value);
      const sectionHit = result.sectionTitle
        .toLocaleLowerCase("ko-KR")
        .includes(query.value);
      const contentHit = result.haystack.includes(query.value);

      return {
        ...result,
        score: titleHit ? 0 : sectionHit ? 1 : contentHit ? 2 : 3,
      };
    })
    .filter((result) => result.score < 3)
    .sort((a, b) => a.score - b.score || a.title.localeCompare(b.title, "ko-KR"))
    .slice(0, 12);
});

const isOpen = computed(() => focus.value && Boolean(searching.value || q.value));
const activeDescendant = computed(() =>
  focusIndex.value >= 0 && results.value[focusIndex.value]
    ? optionId(focusIndex.value)
    : undefined,
);
const statusMessage = computed(() => {
  if (!q.value) return "";
  if (searching.value) return "검색 중입니다.";
  return `검색 결과 ${results.value.length}개`;
});

watch(q, () => {
  focusIndex.value = -1;
});

function updateQuery(event) {
  q.value = event.target.value;
}

function onFocus() {
  focus.value = true;
  emit("focus", true);
}

function onBlur() {
  focus.value = false;
  emit("focus", false);
}

function closeResults() {
  focus.value = false;
  focusIndex.value = -1;
}

function increment() {
  if (focusIndex.value < results.value.length - 1) {
    focusIndex.value++;
  }
}

function decrement() {
  if (focusIndex.value >= 0) {
    focusIndex.value--;
  }
}

function go() {
  if (!results.value.length) return;

  const result =
    focusIndex.value === -1 ? results.value[0] : results.value[focusIndex.value];
  selectResult(result);
}

function selectResult(result) {
  if (!result) return;

  router.push(result.to);
  searchInput.value?.blur();
  q.value = "";
  closeResults();
}

function optionId(index) {
  return `${resultsListId}-option-${index}`;
}

function getSectionPath(id) {
  return String(id || "").split("#")[0];
}

function toRoute(id) {
  const route = String(id || "").replace(/^\/ko(?=\/|#|$)/, "") || "/";
  return route.startsWith("#") ? `/${route}` : route;
}

function isTypingTarget(target) {
  const tagName = target?.tagName?.toLowerCase();
  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target?.isContentEditable
  );
}

function onGlobalKeydown(event) {
  if (
    event.key !== "/" ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    isTypingTarget(event.target)
  ) {
    return;
  }

  event.preventDefault();
  searchInput.value?.focus();
}

onMounted(() => {
  window.addEventListener("keydown", onGlobalKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onGlobalKeydown);
});
</script>
