import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Anna Yang\'s Notebook',
  description: 'LLM learning blog from scratch, with LaTeX support',
  head: [
    ['meta', { name: 'author', content: 'Anna Yang' }],
    ['meta', { name: 'keywords', content: 'LaTeX, Math, Python, Machine Learning, AI, GPT, MetaGPT' }],
    ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: '/image/favicon.png' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tektur:wght@600&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap' }],
  ],
  markdown: {
    math: true,
    lineNumbers: true,
    codeCopyButtonTitle: 'copy',
  },
  themeConfig: {
    logo: '/image/logo-note.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/posts/introduction' },
      { text: 'Posts', link: '/posts/understanding-vector-spaces' },
      { text: 'MetaGPT', link: '/metagpt/basic-usage' },
    ],
    sidebar: {
      '/posts/': [
        {
          text: 'Math',
          items: [
            // { text: 'Introduction', link: '/posts/introduction' },
            // { text: 'Sample Math Note', link: '/posts/sample-math-note' },

            { text: 'Vector Spaces', link: '/posts/understanding-vector-spaces' },
            { text: 'Matrix Calculation', link: '/posts/matrix-operations' },


          ]
        },
        {
          text: 'Python',
          items: [
            { text: 'Torch Multinomial', link: '/posts/torch-multinomial' },
          ]
        }
      ],

      '/metagpt/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/metagpt/introduction' },
            { text: 'Installation', link: '/metagpt/installation' },
            { text: 'Quickstart', link: '/metagpt/quickstart' },]
        },
        {
          text: 'More Configuration',
          items: [
            { text: 'basic usage', link: '/metagpt/basic-usage' },
            { text: 'code generation', link: '/metagpt/code-generation' },
            { text: 'code generation', link: '/metagpt/custom-roles' },]
        },
      ],
    },
    footer: {
      message: 'Anna Yang ©2025 all rights reserved',
    }
  },
  vite: {
    server: {
      strictPort: false,
    },
  }
})