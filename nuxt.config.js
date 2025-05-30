import { defineNuxtConfig } from 'nuxt/config'
import path from "path"

export default defineNuxtConfig({
  telemetry: false,

  nitro: {
    output: {
      publicDir: path.join(__dirname, 'dist')
    }
  },

  app: {
    head: {
      titleTemplate: '%s - Stella IT Docs',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { hid: 'description', name: 'description', content: 'Stella IT의 공식 문서입니다.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fontawesome.appie.dev/css/all.min.css' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        { src: "https://polyfill.appie.dev/polyfill.min.js?features=default%2CJSON%2CNumber.parseInt%2CNumber.parseFloat%2CNumber.isNaN%2CNumber.isInteger%2Ces2019%2Ces2018%2Ces2017%2Ces2016%2Ces2015%2Ces7%2Ces6%2Ces5%2CArray.isArray%2CArray.prototype.forEach%2CArray.prototype.indexOf%2CArray.prototype.sort%2CArray.prototype.map" }
      ]
    },
  },

  css: [
    "~/assets/css/main.css" 
  ],

  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss"
  ],

  compatibilityDate: '2024-12-17',
})