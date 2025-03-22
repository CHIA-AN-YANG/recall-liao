// .vitepress/theme/composables/useTags.ts
import { useData } from 'vitepress'

export function useTags() {
  const { theme } = useData()

  // Get all posts from the theme config
  const posts = theme.value.posts || []

  // Extract all unique tags
  const allTags = Array.from(
    new Set(
      posts.flatMap((post) => post.frontmatter.tags || [])
    )
  ).sort()

  // Get posts by tag
  const getPostsByTag = (tag: string) => {
    return posts.filter((post) =>
      post.frontmatter.tags?.includes(tag)
    )
  }

  // Get post count by tag
  const getPostCountByTag = (tag: string) => {
    return getPostsByTag(tag).length
  }

  return {
    allTags,
    getPostsByTag,
    getPostCountByTag
  }
}