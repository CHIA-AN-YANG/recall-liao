<template>
  <div class="tag-list">
    <h3>Filter by Tags</h3>
    <div class="tags">
      <button
        v-for="tag in uniqueTags"
        :key="tag"
        :class="{ active: selectedTags.includes(tag) }"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
    <div class="posts">
      <div v-for="post in filteredPosts" :key="post.url" class="post-item">
        <a :href="post.url">
          <h4>{{ post.title }}</h4>
          <div class="post-meta">
            <span class="date">{{ post.date }}</span>
            <span class="tags">
              {{ post.tags.join(', ') }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()

const selectedTags = ref([])

const posts = computed(() => {
  const pages = theme.value.pages || []
  return pages
    .filter(page => page.frontmatter?.tags)
    .map(page => ({
      title: page.frontmatter.title,
      url: page.url,
      date: page.frontmatter.date,
      tags: page.frontmatter.tags
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
})

const uniqueTags = computed(() => {
  const tags = new Set()
  posts.value.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

const filteredPosts = computed(() => {
  if (selectedTags.value.length === 0) return posts.value
  return posts.value.filter(post =>
    selectedTags.value.every(tag => post.tags.includes(tag))
  )
})

const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag)
  if (index === -1) {
    selectedTags.value.push(tag)
  } else {
    selectedTags.value.splice(index, 1)
  }
}
</script>

<style scoped>
.tag-list {
  padding: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

button {
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  color: white;
}

button.active {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  color: white;
}

.post-item {
  margin-bottom: 1rem;
}

.post-item a {
  text-decoration: none;
  color: inherit;
}

.post-item h4 {
  margin: 0;
  color: var(--vp-c-brand);
}

.post-meta {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.post-meta .date {
  margin-right: 1rem;
}
</style>