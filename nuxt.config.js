import { defineNuxtConfig } from 'nuxt/config'
import fs from "fs"
import path from "path"
import tailwindcss from "@tailwindcss/vite";

const contentRoot = path.join(__dirname, "content", "ko")

const getContentPaths = (dir = contentRoot) => {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return getContentPaths(entryPath)
    }

    if (!entry.isFile() || !entry.name.endsWith(".md")) {
      return []
    }

    const relativePath = path
      .relative(contentRoot, entryPath)
      .replace(/\.md$/, "")
      .split(path.sep)
      .join("/")

    return relativePath
  })
}

const contentPaths = getContentPaths()
const encodeContentPath = (contentPath) =>
  contentPath
    .split("/")
    .map((segment) => encodeURIComponent(segment).replace(/~/g, "%7E"))
    .join("~")
const contentRoutes = contentPaths.map((contentPath) =>
  contentPath === "index" ? "/" : `/${contentPath}`,
)
const contentApiRoutes = contentPaths
  .filter((contentPath) => contentPath !== "index")
  .map((contentPath) => `/api/docs-page/${encodeContentPath(contentPath)}`)

export default defineNuxtConfig({
  telemetry: false,

  nitro: {
    output: {
      publicDir: path.join(__dirname, 'dist')
    },
    prerender: {
      routes: [
        ...contentRoutes,
        ...contentApiRoutes,
        "/api/docs-list",
        "/api/search-index",
      ]
    },
  },

  app: {
    head: {
      titleTemplate: '%s - Stella IT 고객센터',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'Stella IT 고객센터에서 도움말과 가이드를 제공합니다.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://static.stella-it-usercontent.com/fontawesome6/css/all.min.css' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
      ]
    },
  },

  css: [
    "@/assets/css/main.css" 
  ],

  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/content"
  ],

  colorMode: {
    preference: "system",
    fallback: "light",
    classPrefix: "",
    classSuffix: "",
    storageKey: "stella-it-docs-theme",
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark"
        }
      }
    }
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
      global: true
    }
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  compatibilityDate: '2026-05-09',
})
