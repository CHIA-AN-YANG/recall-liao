<!-- docs/.vitepress/theme/Layout.vue -->
<template>
  <Layout>
    <template #aside-outline-after>
      <TagList />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import TagList from './components/TagList.vue'

const { Layout } = DefaultTheme
</script>

<style scoped>
.aside {
  width: 280px;
}
</style>