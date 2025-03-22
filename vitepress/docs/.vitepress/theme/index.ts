import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { MotionPlugin } from '@vueuse/motion'
import TagList from './components/TagList.vue'
import AnimatedTitle from './components/AnimatedTitle.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(MotionPlugin)
    app.component('TagList', TagList)
    app.component('AnimatedTitle', AnimatedTitle)
  }
} satisfies Theme
