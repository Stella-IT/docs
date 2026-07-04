<template>
  <div class="prose-pre">
    <button
      class="copy-button"
      type="button"
      :disabled="copyState === 'copying'"
      :aria-label="copyLabel"
      :title="copyLabel"
      @click="copyCode"
    >
      <i class="fas" :class="copyIconClass" aria-hidden="true" />
      <span class="sr-only">{{ copyLabel }}</span>
    </button>
    <pre ref="preElement" v-bind="$attrs" :class="props.class"><slot /></pre>
    <span class="sr-only" aria-live="polite">{{ copyStatusMessage }}</span>
  </div>
</template>

<script setup>
import { writeTextToClipboard } from "../../utils/markdown-content";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array,
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: [String, Array, Object],
    default: null,
  },
});

const preElement = ref(null);
const copyState = ref("idle");
const copyResetTimer = ref(null);

const copyLabel = computed(() => {
  if (copyState.value === "copying") return "코드 복사 중";
  if (copyState.value === "success") return "코드 복사됨";
  if (copyState.value === "error") return "코드 복사 실패";
  return "코드 복사";
});

const copyIconClass = computed(() => {
  if (copyState.value === "copying") return "fa-spinner fa-spin";
  if (copyState.value === "success") return "fa-check";
  if (copyState.value === "error") return "fa-triangle-exclamation";
  return "fa-copy";
});

const copyStatusMessage = computed(() => {
  if (copyState.value === "success") return "코드가 클립보드에 복사되었습니다.";
  if (copyState.value === "error")
    return "코드 복사에 실패했습니다. 다시 시도해 주세요.";
  return "";
});

const getCopyText = () => props.code || preElement.value?.innerText || "";

const copyCode = async () => {
  if (copyState.value === "copying") return;
  if (copyResetTimer.value) clearTimeout(copyResetTimer.value);

  copyState.value = "copying";

  try {
    await writeTextToClipboard(getCopyText());
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
</script>

<style scoped>
.prose-pre {
  position: relative;
  margin: 1.7142857em 0;
}

.prose-pre :deep(pre) {
  margin: 0;
  padding-right: 3.75rem;
}

.prose-pre :deep(pre code .line) {
  display: block;
}

.copy-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(240, 246, 252, 0.16);
  border-radius: 0.25rem;
  background-color: rgba(22, 27, 34, 0.92);
  color: #c9d1d9;
  font-size: 0.875rem;
  opacity: 0;
  transform: translateY(-0.125rem);
  transition:
    background-color 120ms ease,
    border-color 120ms ease,
    color 120ms ease,
    opacity 120ms ease,
    transform 120ms ease;
}

.prose-pre:hover .copy-button,
.prose-pre:focus-within .copy-button {
  opacity: 1;
  transform: translateY(0);
}

.copy-button:hover {
  border-color: rgba(240, 246, 252, 0.28);
  background-color: #21262d;
  color: #ffffff;
}

.copy-button:disabled {
  cursor: default;
}

.copy-button:focus-visible {
  opacity: 1;
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  transform: translateY(0);
}

@media (hover: none) {
  .copy-button {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
