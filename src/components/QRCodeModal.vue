<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="qrCode" alt="QR Code" class="qr-code" />
      <div class="modal-actions">
        <button @click="downloadQRCode">Download</button>
        <button v-if="canShare" @click="shareQRCode">Share</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  qrCode: String,
  isVisible: Boolean,
  alias: String // Accept alias as a prop
});
const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

const downloadQRCode = () => {
  const link = document.createElement("a");
  link.href = props.qrCode;
  link.download = `${props.alias || "qr-code"}.png`; // Use alias for the file name
  link.click();
};

const canShare = navigator.share !== undefined;

const shareQRCode = async () => {
  if (canShare) {
    try {
      const response = await fetch(props.qrCode);
      const blob = await response.blob();
      const file = new File([blob], `${props.alias || "qr-code"}.png`, { type: "image/png" });

      await navigator.share({
        title: `${props.alias || "QR Code"}`,
        text: `Here's a QR code with to access my website: ${props.alias || "qr-code"}`,
        files: [new File([props.qrCode], `${props.alias || "qr-code"}.png`, { type: "image/png" })]
      })
    } catch (error) {
      console.error("Error sharing QR code:", error);
    }
  } else {
    console.log("Web Share API is not supported in this browser.");
  }
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
  gap: 8px;
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
button {
  padding: 8px 16px;
  margin-right: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  height: 40px;
}
button:hover {
  background-color: #0056b3;
}
.modal-actions {
  display: flex;
  gap: 4px;
}
</style>
