---
layout: home
title: Math Blog
hero:
  name: Math Blog
  text: Your Gateway to Mathematical Discovery
  tagline: Explore mathematics through interactive examples and clear explanations
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/your-repo/math-blog

features:
  - title: LaTeX Support
    details: Write beautiful mathematical equations using LaTeX syntax
  - title: Code Highlighting
    details: Share code examples with syntax highlighting
  - title: Tag Filtering
    details: Easily find posts by topic using tags
---

<script setup>
import AnimatedTitle from './.vitepress/theme/components/AnimatedTitle.vue'
</script>

<div class="main-content">
  <AnimatedTitle text="Math Blog" />
  
  Welcome to our mathematics blog where we explore various mathematical concepts, 
  from basic arithmetic to advanced calculus. Use the tag system to filter posts 
  by topic and find exactly what you're looking for.
</div>

<style>
.main-content {
  padding: 2rem;
  text-align: center;
}
</style>