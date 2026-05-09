import { defineNuxtConfig } from 'nuxt/config'
import fs from "fs"
import path from "path"
import tailwindcss from "@tailwindcss/vite";

const contentRoot = path.join(__dirname, "content", "ko")

const getContentRoutes = (dir = contentRoot) => {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return getContentRoutes(entryPath)
    }

    if (!entry.isFile() || !entry.name.endsWith(".md")) {
      return []
    }

    const relativePath = path
      .relative(contentRoot, entryPath)
      .replace(/\.md$/, "")
      .split(path.sep)
      .join("/")

    return relativePath === "index" ? "/" : `/${relativePath}`
  })
}

export default defineNuxtConfig({
  telemetry: false,

  nitro: {
    output: {
      publicDir: path.join(__dirname, 'dist')
    },
    prerender: {
      routes: getContentRoutes()
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
    "@nuxt/content"
  ],

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
