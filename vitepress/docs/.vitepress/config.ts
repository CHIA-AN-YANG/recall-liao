import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-TW',
  title: '廖偉翔罷免資訊整理',
  description: '台中市立委廖偉翔，公民罷免資訊整理',
  head: [
    ['meta', { name: 'author', content: 'Anna Yang' }],
    ['meta', { name: 'keywords', content: 'LaTeX, Math, Python, Machine Learning, AI, GPT, MetaGPT' }],
    ['link', { rel: 'icon', type: "image/jpg", sizes: "32x32", href: '/recall-logo.jpg' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap' }],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/image/logo-note.webp',
    nav: [
      { text: '回首頁', link: '/' },
      { text: '問政品質', link: '/personal/stupid' },
      { text: '預算影響', link: '/budget/overview' },
      // { text: '國家安全', link: '/metagpt/basic-usage' },
    ],
    sidebar: {
      '/personal/': [
        {
          text: '問政品質',
          items: [
            { text: '荒唐問政', link: '/personal/stupid' },
            { text: '收割行為', link: '/personal/crop' },
          ]
        },
        {
          text: '暴力行為',
          items: [
            { text: '立院衝突事件', link: '/personal/violence' },
          ]
        }
      ],

      '/budget/': [
        {
          text: '預算被砍了',
          items: [
            { text: '整體預算影響', link: '/budget/overview' },
            { text: 'PDF A4版本', link: '/budget/A4-summary' },
            { text: '相關影音', link: '/budget/videos' },
          ]
        },
        // {
        //   text: '國家安全',
        //   items: [
        //     { text: 'basic usage', link: '/metagpt/basic-usage' },
        //     { text: 'code generation', link: '/metagpt/code-generation' },
        //     { text: 'code generation', link: '/metagpt/custom-roles' },]
        // },
      ],
    },
    footer: {
      message: 'Anna Yang ©2025 all rights reserved',
    },
  },
  vite: {
    server: {
      strictPort: false,
    },
  }
})