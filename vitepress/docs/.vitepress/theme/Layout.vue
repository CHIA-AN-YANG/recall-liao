<!-- docs/.vitepress/theme/Layout.vue -->
<template>
  <Layout>
    <template #aside-outline-after>
      <TagList />
    </template>
  </Layout>
</template>

<script setup>
import TagList from './components/TagList.vue'
</script>

<style scoped>
.aside {
  width: 280px;
}
</style>