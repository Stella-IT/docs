<template lang="pug">
aside.hidden(class="xl:block" v-if="flatLinks.length > 0")
  nav.sticky.top-24.overflow-y-auto.pr-2(
    class="max-h-[calc(100vh-7rem)]",
    aria-labelledby="on-this-page-title"
  )
    h2#on-this-page-title.text-xs.font-semibold.uppercase.text-gray-500(
      class="dark:text-gray-400"
    ) On this page
    ul.mt-3.border-l.border-gray-200(class="dark:border-gray-800")
      li(v-for="link in flatLinks" :key="link.id")
        a(
          class="-ml-px block border-l-2 py-1.5 pr-2 text-sm leading-5 transition-colors",
          :href="`#${link.id}`",
          :aria-current="activeId === link.id ? 'location' : undefined",
          :class="[linkClasses(link), depthClasses(link.depth)]",
          @click="setActive(link.id)"
        ) {{ link.text }}
</template>

<script setup>
const props = defineProps({
  toc: {
    type: Object,
    default: () => ({ links: [] }),
  },
});

const activeId = ref("");
let ticking = false;

const flatLinks = computed(() => flattenLinks(props.toc?.links || []));

function flattenLinks(links) {
  return links.flatMap((link) => {
    const normalized = {
      id: link.id,
      text: link.text,
      depth: link.depth,
    };
    const children = flattenLinks(link.children || []);

    if (!normalized.id || !normalized.text) {
      return children;
    }

    return [normalized, ...children];
  });
}

function depthClasses(depth) {
  if (depth >= 4) return "pl-10";
  if (depth === 3) return "pl-7";
  return "pl-4";
}

function linkClasses(link) {
  if (activeId.value === link.id) {
    return "border-primary-500 font-semibold text-primary-600 dark:border-primary-400 dark:text-primary-400";
  }

  return "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-100";
}

function setActive(id) {
  activeId.value = id;
}

function updateActiveHeading() {
  const headings = flatLinks.value
    .map((link) => document.getElementById(link.id))
    .filter(Boolean);

  if (!headings.length) return;

  const offset = 96;
  let currentId = headings[0].id;

  for (const heading of headings) {
    if (heading.getBoundingClientRect().top <= offset) {
      currentId = heading.id;
    } else {
      break;
    }
  }

  activeId.value = currentId;
}

function scheduleActiveHeadingUpdate() {
  if (ticking) return;

  ticking = true;
  window.requestAnimationFrame(() => {
    updateActiveHeading();
    ticking = false;
  });
}

function updateActiveFromHash() {
  const hashId = decodeURIComponent(window.location.hash.replace("#", ""));

  if (hashId) {
    activeId.value = hashId;
    return;
  }

  updateActiveHeading();
}

watch(flatLinks, async (links) => {
  if (!links.length) return;

  await nextTick();
  updateActiveFromHash();
});

onMounted(async () => {
  await nextTick();

  if (!flatLinks.value.length) return;

  updateActiveFromHash();

  window.addEventListener("scroll", scheduleActiveHeadingUpdate, {
    passive: true,
  });
  window.addEventListener("resize", scheduleActiveHeadingUpdate);
  window.addEventListener("hashchange", updateActiveFromHash);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scheduleActiveHeadingUpdate);
  window.removeEventListener("resize", scheduleActiveHeadingUpdate);
  window.removeEventListener("hashchange", updateActiveFromHash);
});
</script>
