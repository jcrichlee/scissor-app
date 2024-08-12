<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="qrCode" alt="QR Code" class="qr-code" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  qrCode: String,
  isVisible: Boolean
});
const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.modal-content {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  position: relative;
}
.close {
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
}
.qr-code {
  width: 15rem;
  height: 15rem;
}
</style>
