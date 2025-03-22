import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { MotionPlugin } from '@vueuse/motion'
import TagList from './components/TagList.vue'
import CustomH1 from './components/CustomH1.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(MotionPlugin)
    app.component('TagList', TagList)
    app.component('CustomH1', CustomH1)
  }
} satisfies Theme
