import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import TagList from './components/TagList.vue'

export { TagList }

export const Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout)
  },
  enhanceApp({ app }) {
    app.component('TagList', TagList)
  }
}

export default Theme