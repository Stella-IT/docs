import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import vue from "eslint-plugin-vue";
import globals from "globals";

const nuxtGlobals = Object.fromEntries(
  [
    "computed",
    "createError",
    "defineEventHandler",
    "defineNuxtConfig",
    "getRouterParam",
    "navigateTo",
    "queryCollection",
    "queryCollectionSearchSections",
    "ref",
    "setHeader",
    "useFetch",
    "useHead",
    "useRoute",
    "useRuntimeConfig",
  ].map((name) => [name, "readonly"]),
);

export default defineConfig(
  globalIgnores([
    ".data/**",
    ".nuxt/**",
    ".output/**",
    "content/**",
    "dist/**",
    "node_modules/**",
    "public/**",
  ]),
  {
    ...js.configs.recommended,
    files: ["**/*.{js,mjs,ts}"],
  },
  ...vue.configs["flat/essential"],
  {
    files: ["**/*.{js,mjs,ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...nuxtGlobals,
      },
      sourceType: "module",
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
);
