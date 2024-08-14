<template>
  <section id="analytics">
    <div class="analytic">
      <div class="inputs">
        <input type="text" id="url" class="url" v-model="url" placeholder="Paste URL here..." />
        <div class="options">
          <div class="select-container">
            <select id="custom-select" class="custom-select" v-model="selectedDomain">
              <option value="" disabled selected>Choose Domain</option>
              <option value="bitly">Bit.ly</option>
              <option value="tinyurl">TinyURL</option>
              <option value="rebrandly">Rebrandly</option>
            </select>
          </div>
          <input
            type="text"
            id="alias"
            class="alias"
            v-model="alias"
            placeholder="Type Alias here"
          />
        </div>
      </div>
      <div class="analyticBottom">
        <div class="button">
          <button class="trimURL" @click="trimURL">Trim URL</button>
          <span class="icon">
            <img src="../assets/images/magic-wand.png" alt="magic-wand" />
          </span>
        </div>
        <p>
          By clicking TrimURL, I agree to the
          <strong>Terms of Service, Privacy Policy</strong>
          and Use of Cookies.
        </p>
      </div>
    </div>
    <QRCodeModal :qrCode="qrCode" :isVisible="isModalVisible" :alias="alias" @close="isModalVisible = false" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import QRCode from "qrcode";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import QRCodeModal from "./QRCodeModal.vue";
import {
  shortenWithBitly,
  shortenWithTinyURL,
  shortenWithRebrandly
} from "@/api";

const url = ref("");
const selectedDomain = ref("");
const alias = ref("");
const qrCode = ref("");
const isModalVisible = ref(false);

const generateQRCode = async (url) => {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(url);
    qrCode.value = qrCodeDataURL;
    isModalVisible.value = true;
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
};

const storeURLInDatabase = async (shortenedURL, qrCode) => {
  try {
    const timestamp = Date.now();
    const docRef = await addDoc(collection(db, "urls"), {
      shortenedURL,
      qrCode,
      createdAt: timestamp
    });
    console.log("URL and QR code stored successfully with ID:", docRef.id);
  } catch (error) {
    console.error("Error storing URL in database:", error);
  }
};

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Copied to clipboard:", text);
    })
    .catch((err) => {
      console.error("Failed to copy to clipboard:", err);
    });
};

const trimURL = async () => {
  if (!url.value || !selectedDomain.value) {
    alert("Please enter all fields.");
    return;
  }

  try {
    let shortenedURL = "";

    switch (selectedDomain.value) {
      case "bitly":
        shortenedURL = await shortenWithBitly(url.value);
        break;
      case "tinyurl":
        shortenedURL = await shortenWithTinyURL(url.value);
        break;
      case "rebrandly":
        shortenedURL = await shortenWithRebrandly(url.value);
        break;
      default:
        alert("Invalid domain selected.");
        return;
    }

    await generateQRCode(shortenedURL);
    await storeURLInDatabase(shortenedURL, qrCode.value);
    copyToClipboard(shortenedURL);
    alert(`Shortened URL: ${shortenedURL} copied to clipboard.`);
  } catch (error) {
    console.error("Error shortening URL:", error);
    alert("Failed to shorten the URL. Please try again.");
  }
};
</script>

<style scoped>
/* Your styles here */
</style>


<style scoped>
/* Your styles here */
</style>