<template lang="pug">
.w-full.relative.flex.flex-col.justify-between
    .w-full.relative(@keydown.down='increment' @keydown.up='decrement' @keydown.enter='go')
        label.sr-only(for='search') Search
        .relative
            i.far.fa-search.absolute.left-3.transform.text-gray-400(class="top-1/2 -translate-y-1/2")
            input#search.block.w-full.pl-10.pr-3.py-2.truncate.leading-5.placeholder-gray-500.border.border-transparent.text-gray-700.rounded-md.bg-gray-200(ref='search' v-model='q' class='dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 focus:outline-none focus:bg-white dark-focus:bg-gray-900 dark:bg-gray-800' :class="{ 'rounded-b-none': focus && (searching || results.length) }" placeholder='문서를 검색해보세요.' type='search' autocomplete='off' @focus='onFocus' @blur='onBlur')
    ul.z-10.absolute.w-full.flex-1.top-0.bg-white.rounded-md.border.border-gray-300.overflow-hidden(v-show='focus && (searching || results.length)' class='dark:bg-gray-900 dark:border-gray-700' :class="{ 'rounded-t-none': focus && (searching || results.length) }" style='margin-top: 37px;')
        li.px-4.py-2.flex.gap-2(v-if='searching && !results.length')
          loading
          span 검색 중..
        li(v-for='(result, index) of results' :key='result.slug' @mouseenter='focusIndex = index' @mousedown='go')
            nuxt-link.flex.px-4.py-2.items-center.leading-5.transition.ease-in-out.duration-150(:to='localePath(result.to)' :class="{ 'text-primary-500 bg-gray-200 dark:bg-gray-800': focusIndex === index }" @click='focus = false')
                span.font-bold.hidden(v-if='result.category' class="lg:inline") {{ result.category }}
                i.far.fa-arrow-right.w-3.h-3.mx-3.hidden(v-if='result.category' class="lg:inline")
                | {{ result.title }}
</template>

<script>
export default {
  data () {
    return {
      q: '',
      focus: false,
      focusIndex: -1,
      open: false,
      searching: false,
      results: []
    }
  },
  watch: {
    async q (q) {
      this.focusIndex = -1
      if (!q) {
        this.searching = false
        this.results = []
        return
      }
      this.searching = true
      this.results = await this.$content("ko", { deep: true }).sortBy('position', 'asc').only(['title', 'slug', 'category', 'to']).limit(12).search(q).fetch()
      this.searching = false
    }
  },
  mounted () {
    window.addEventListener('keyup', this.keyup)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyup)
  },
  methods: {
      localePath (path) {
          return `${path}`
      },
    onFocus () {
      this.focus = true
      this.$emit('focus', true)
    },
    onBlur () {
      this.focus = false
      this.$emit('focus', false)
    },
    keyup (e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
    increment () {
      if (this.focusIndex < this.results.length - 1) {
        this.focusIndex++
      }
    },
    decrement () {
      if (this.focusIndex >= 0) {
        this.focusIndex--
      }
    },
    go () {
      if (this.results.length === 0) {
        return
      }
      const result = this.focusIndex === -1 ? this.results[0] : this.results[this.focusIndex]
      this.$router.push(this.localePath(result.to))
      // Unfocus the input and reset the query.
      this.$refs.search.blur()
      this.q = ''
    }
  }
}
</script>