import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { MotionPlugin } from '@vueuse/motion'
import TagList from './components/TagList.vue'
import AnimatedTitle from './components/AnimatedTitle.vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MotionPlugin)
    app.component('TagList', TagList)
    app.component('AnimatedTitle', AnimatedTitle)
  }
}
