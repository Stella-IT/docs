<template>
  <div class="code-group">
    <div
      class="rounded-t-md border-b-2 border-gray-700 px-2 bg-gray-800 text-sm text-white relative"
      role="tablist"
    >
      <button
        v-for="({ key, label }, i) in tabs"
        ref="tabButtons"
        :key="key"
        class="px-4 py-3 text-gray-400 font-bold font-mono"
        :class="[activeTabIndex === i && 'active']"
        type="button"
        role="tab"
        :aria-selected="activeTabIndex === i"
        @click="setActiveTab(i)"
      >
        {{ label }}
      </button>
      <span
        ref="highlightUnderline"
        class="highlight-underline"
        aria-hidden="true"
      />
    </div>
    <RenderCodeBlocks :nodes="panels" />
  </div>
</template>

<script setup>
import { Fragment, cloneVNode } from "vue";

const slots = useSlots();
const activeTabIndex = ref(0);
const tabButtons = ref([]);
const highlightUnderline = ref(null);

const RenderCodeBlocks = {
  props: {
    nodes: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return () => props.nodes;
  },
};

const collectCodeBlocks = (nodes) =>
  nodes.flatMap((node) => {
    if (node.type === Fragment && Array.isArray(node.children)) {
      return collectCodeBlocks(node.children);
    }

    return node.props?.label != null ? [node] : [];
  });

const codeBlocks = computed(() => collectCodeBlocks(slots.default?.() ?? []));

const tabs = computed(() =>
  codeBlocks.value.map((node, index) => ({
    key: node.key ?? `${node.props.label}-${index}`,
    label: String(node.props.label),
  })),
);

const panels = computed(() =>
  codeBlocks.value.map((node, index) =>
    cloneVNode(node, {
      active: activeTabIndex.value === index,
      role: "tabpanel",
    }),
  ),
);

const updateHighlightUnderlinePosition = async () => {
  await nextTick();

  const activeTab = tabButtons.value[activeTabIndex.value];
  if (!activeTab || !highlightUnderline.value) {
    return;
  }

  highlightUnderline.value.style.left = `${activeTab.offsetLeft}px`;
  highlightUnderline.value.style.width = `${activeTab.clientWidth}px`;
};

const setActiveTab = (index) => {
  activeTabIndex.value = index;
  updateHighlightUnderlinePosition();
};

watch(activeTabIndex, updateHighlightUnderlinePosition);
onMounted(updateHighlightUnderlinePosition);
onUpdated(updateHighlightUnderlinePosition);
</script>

<style lang="postcss" scoped>
@reference "../../assets/css/main.css";

.highlight-underline {
  @apply bg-primary-500 absolute;
  bottom: -2px;
  height: 2px;
  transition:
    left 150ms,
    width 150ms;
}
.code-group :deep {
  & .prose-pre {
    @apply mt-0 mb-0;
  }

  & pre[class*="language-"] {
    @apply rounded-t-none mt-0;
  }
}
</style>
