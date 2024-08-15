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
    <QRCodeModal
      :qrCode="qrCode"
      :isVisible="isModalVisible"
      :alias="alias"
      @close="isModalVisible = false"
    />
  </section>
</template>

<script setup>
import { ref, inject } from "vue";
import QRCode from "qrcode";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import QRCodeModal from "./QRCodeModal.vue";
import { shortenWithBitly, shortenWithTinyURL, shortenWithRebrandly } from "@/api";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/firebase";

const alias = ref("");
const qrCode = ref("");
const selectedDomain = ref("");
const url = ref("");
const isModalVisible = ref(false);

const userId = inject('userId'); // Inject userId from global state

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const generateQRCode = async (url) => {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(url);
    qrCode.value = qrCodeDataURL;
    isModalVisible.value = true;
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
};

const storeURLInDatabase = async (shortenedURL, qrCode, url, alias, selectedDomain, userId) => {
  try {
    const timestamp = Date.now();
    const formattedDate = formatDate(timestamp);
    const docRef = await addDoc(collection(db, "urls"), {
      alias,
      createdAt: formattedDate,
      qrCode,
      selectedDomain,
      shortenedURL,
      url,
      userId
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
    await storeURLInDatabase(shortenedURL, qrCode.value, url.value, alias.value, selectedDomain.value, userId.value);
    copyToClipboard(shortenedURL);
    alert(`Shortened URL: ${shortenedURL} copied to clipboard.`);
    logEvent(analytics, "url_created", {
      shortenedURL: shortenedURL,
      url: url.value,
      alias: alias.value,
      selectedDomain: selectedDomain.value,
      timestamp: formatDate(Date.now())
    });
  } catch (error) {
    console.error("Error shortening URL:", error);
    alert("Failed to shorten the URL. Please try again.");
    logEvent(analytics, "url_creation_error", {
      error: error.message,
      timestamp: formatDate(Date.now())
    });
  }
};
</script>


<style scoped>
/* Your styles here */
</style>
