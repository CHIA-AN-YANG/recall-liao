// docs/.vitepress/theme/index.ts
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import TagList from './components/TagList.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Layout)
  },
  enhanceApp({ app }) {
    app.component('TagList', TagList)
  }
}