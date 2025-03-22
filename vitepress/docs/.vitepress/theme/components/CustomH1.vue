<template>
  <h1 class="custom-h1 animate-fade-in">
    <span class="gradient-text">
      <slot></slot>
    </span>
    <span class="underline"></span>
  </h1>
</template>

<script setup lang="ts">
// Component receives content through default slot
</script>

<style scoped>
.custom-h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 2rem 0;
  padding-bottom: 0.5rem;
  position: relative;
  display: inline-block;
}

.underline {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 4px;
  background: var(--header-gradient);
  border-radius: 2px;
  display: block;
  transform-origin: left;
  animation: expandLine 0.6s ease-out forwards;
}

@keyframes expandLine {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.custom-h1:hover .underline {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .custom-h1 {
    font-size: 2rem;
  }
}
</style>