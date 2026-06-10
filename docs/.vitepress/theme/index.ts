import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Giscus from './Giscus.vue'
import Watermark from './Watermark.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Giscus),
      'layout-bottom': () => h(Watermark)
    })
  }
} satisfies Theme
