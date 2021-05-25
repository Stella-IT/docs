import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#00a8ff'
  },
  
  i18n: {
    locales: () => [{
      code: 'ko',
      iso: 'ko',
      file: 'ko-KR.js',
      name: '한국어'
    }],
    langDir: '../../../../locales/',
    defaultLocale: 'ko'
  },

  css: [
    "./assets/css/font.css"
  ]
})
