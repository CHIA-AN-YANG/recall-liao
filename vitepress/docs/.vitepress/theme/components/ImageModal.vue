<template>
  <div class="image-modal-container">
    <!-- Small image trigger -->
    <img :src="thumbnailSrc" :alt="alt" class="thumbnail" @click="openModal" />

    <!-- Modal overlay -->
    <div v-if="isOpen" class="modal" @click.self="closeModal">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="fullSrc" :alt="alt" class="modal-content" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  thumbnailSrc: String,
  fullSrc: String,
  alt: String,
});

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.image-modal-container {
  display: inline-flex;
  margin-right: 10px;
  height: 180px;
}
.thumbnail {
  width: auto;
  cursor: pointer;
  transition: transform 0.3s;
}
.thumbnail:hover {
  transform: scale(1.05);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.modal-content {
  max-width: 80%;
  max-height: 80%;
  border-radius: 8px;
}
.close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}
.close:hover {
  color: #bbb;
}
</style>
