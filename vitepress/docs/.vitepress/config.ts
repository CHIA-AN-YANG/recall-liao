import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Anna Yang\'s Notebook',
  description: 'LLM learning blog from scratch, with LaTeX support',
  markdown: {
    math: true,
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/introduction' },
    ],
    sidebar: {
      '/posts/': [
        {
          text: 'All Posts',
          items: [
            // { text: 'Introduction', link: '/posts/introduction' },
            // { text: 'Sample Math Note', link: '/posts/sample-math-note' },
            { text: 'Vector Spaces', link: '/posts/understanding-vector-spaces' },
            { text: 'Matrix Calculation', link: '/posts/matrix-operations' },
          ]
        }
      ]
    },
    footer: {
      message: 'Made with VitePress'
    }
  },
  vite: {
    server: {
      strictPort: false,
    },
  }
})