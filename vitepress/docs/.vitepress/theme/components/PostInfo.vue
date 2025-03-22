<template>
  <div class="post-info">
    <span v-if="frontmatter.date" class="date">
      {{ formatDate(frontmatter.date) }}
    </span>
    <div v-if="frontmatter.tags?.length" class="tags">
      <span v-for="tag in frontmatter.tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useData } from "vitepress";

const { frontmatter } = useData();

function formatDate(date) {
  if (!date) return "";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}
</script>

<style scoped>
.post-info {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.tags {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.tag {
  padding: 0.13rem 0.5rem 0.25rem;
  border-radius: 10px;
  background-color: var(--vp-c-brand-2);
  color: var(--vp-c-text-1);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.2;
}

.date {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>