<template>
  <span
    class="prose-img"
    :class="imageClass"
    :style="containerStyle"
    :data-state="status"
    :aria-busy="status === 'loading'"
  >
    <img
      v-if="status !== 'error'"
      v-show="status === 'loaded'"
      ref="image"
      class="prose-img__image"
      :class="imageClass"
      :src="refinedSrc"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
      v-bind="imageAttrs"
      @load="status = 'loaded'"
      @error="status = 'error'"
    />

    <span
      v-if="status !== 'loaded'"
      class="prose-img__status"
      :role="status === 'error' ? 'alert' : 'status'"
    >
      <span
        v-if="status === 'loading'"
        class="prose-img__spinner"
        aria-hidden="true"
      />
      <i
        v-else
        class="fas fa-triangle-exclamation prose-img__error-icon"
        aria-hidden="true"
      />
      <span>{{ statusText }}</span>
      <a
        v-if="status === 'error' && refinedSrc"
        class="prose-img__link"
        :href="refinedSrc"
        target="_blank"
        rel="noopener noreferrer"
      >
        새 탭에서 열기
      </a>
    </span>
  </span>
</template>

<script setup>
import { joinURL, withLeadingSlash, withTrailingSlash } from "ufo";

defineOptions({ inheritAttrs: false });

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const attrs = useAttrs();
const image = ref(null);
const status = ref(props.src ? "loading" : "error");

const refinedSrc = computed(() => {
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    const base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));

    if (base !== "/" && !props.src.startsWith(base)) {
      return joinURL(base, props.src);
    }
  }

  return props.src;
});

const imageClass = computed(() => attrs.class);
const imageAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const containerStyle = computed(() => ({
  ...getWidthStyle(props.width),
  ...getAspectRatioStyle(props.width, props.height),
}));
const statusText = computed(() =>
  status.value === "error"
    ? "이미지를 불러오지 못했습니다"
    : "이미지를 불러오는 중",
);

const syncCompletedImage = () => {
  if (!image.value?.complete) return;

  status.value = image.value.naturalWidth > 0 ? "loaded" : "error";
};

watch(refinedSrc, async () => {
  status.value = props.src ? "loading" : "error";
  await nextTick();
  syncCompletedImage();
});

onMounted(syncCompletedImage);

function getWidthStyle(width) {
  if (!width) return {};

  return {
    width: /^\d+$/.test(String(width)) ? `${width}px` : String(width),
  };
}

function getAspectRatioStyle(width, height) {
  const numericWidth = Number(width);
  const numericHeight = Number(height);

  if (!numericWidth || !numericHeight) return {};

  return {
    aspectRatio: `${numericWidth} / ${numericHeight}`,
  };
}
</script>

<style scoped>
.prose-img {
  position: relative;
  display: block;
  max-width: 100%;
  min-height: 7rem;
  margin: 2em 0;
}

.prose-img[data-state="loaded"] {
  min-height: 0;
}

.prose-img__image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0;
}

.prose-img.dark-img,
.prose-img__image.dark-img,
.dark .prose-img.light-img,
.dark .prose-img__image.light-img {
  display: none;
}

.dark .prose-img.dark-img,
.dark .prose-img__image.dark-img {
  display: block;
}

.prose-img__status {
  display: flex;
  min-height: 7rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  background-color: var(--color-gray-50);
  color: var(--color-gray-600);
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;
  height: 100%;
}

.prose-img__spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--color-gray-300);
  border-top-color: var(--color-primary-500);
  border-radius: 9999px;
  animation: prose-img-spin 0.75s linear infinite;
}

.prose-img__error-icon {
  color: var(--color-red-500);
}

.prose-img__link {
  color: var(--color-primary-600);
  font-weight: 500;
  text-decoration: none;
}

.prose-img__link:hover {
  text-decoration: underline;
}

.dark .prose-img__status {
  border-color: var(--color-gray-800);
  background-color: var(--color-zinc-900);
  color: var(--color-gray-300);
}

.dark .prose-img__spinner {
  border-color: var(--color-gray-700);
  border-top-color: var(--color-primary-400);
}

.dark .prose-img__link {
  color: var(--color-primary-400);
}

@keyframes prose-img-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
