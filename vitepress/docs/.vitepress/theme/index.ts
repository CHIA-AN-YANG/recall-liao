import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { MotionPlugin } from '@vueuse/motion'
import CustomH1 from './components/CustomH1.vue'
import PostInfo from './components/PostInfo.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(MotionPlugin)
    app.component('PostInfo', PostInfo)
    app.component('CustomH1', CustomH1)
  }
} satisfies Theme
