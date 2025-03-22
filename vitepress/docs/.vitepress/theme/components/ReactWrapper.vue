<template>
  <div class="wave-wrapper">
    <div ref="reactRoot" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import React from "react";
import ReactDOM from "react-dom/client"; // VuePress 2 runs on Vite, so we can use this
import Wave from "./react/Wave.tsx";

const reactRoot = ref(null);
let root = null;

onMounted(() => {
  if (reactRoot.value) {
    root = ReactDOM.createRoot(reactRoot.value);
    root.render(React.createElement(Wave));
  }
});

onBeforeUnmount(() => {
  if (root) {
    root.unmount();
  }
});
</script>

<style scoped>
.wave-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  user-select: none;
  z-index: -1;
}
</style>