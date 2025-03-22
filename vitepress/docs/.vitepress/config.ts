import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Your Gateway to Mathematical Discoveryg',
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
            { text: 'Introduction', link: '/posts/introduction' },
            { text: 'Sample Math Note', link: '/posts/sample-math-note' },
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