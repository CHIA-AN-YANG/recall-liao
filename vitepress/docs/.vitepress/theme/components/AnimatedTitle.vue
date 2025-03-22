<template>
  <div ref="titleRef" class="animated-title">
    <span v-for="(char, index) in displayText" :key="index" class="char">
      {{ char }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useMotion } from '@vueuse/motion'

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const titleRef = ref(null)
const displayText = ref([])
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

const { motion } = useMotion(titleRef, {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 800
    }
  }
})

const randomChar = () => chars[Math.floor(Math.random() * chars.length)]

const animateText = async () => {
  const finalText = props.text.split('')
  displayText.value = Array(finalText.length).fill('_')
  
  // Initial random characters
  for (let i = 0; i < finalText.length; i++) {
    await new Promise(r => setTimeout(r, 50))
    displayText.value[i] = randomChar()
  }
  
  // Settle to actual characters
  for (let i = 0; i < finalText.length; i++) {
    await new Promise(r => setTimeout(r, 100))
    displayText.value[i] = finalText[i]
  }
}

onMounted(() => {
  motion.value.enter()
  animateText()
})

watch(() => props.text, () => {
  animateText()
})
</script>

<style scoped>
.animated-title {
  font-family: monospace;
  font-size: 2.5em;
  font-weight: bold;
  display: flex;
  gap: 0.1em;
  color: var(--vp-c-brand);
}

.char {
  display: inline-block;
  transition: all 0.2s ease;
}
</style>