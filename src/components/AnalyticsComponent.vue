<template>
  <section id="analytics">
    <div class="analytic">
      <div class="inputs">
        <input type="text" id="url" class="url" v-model="url" placeholder="Paste URL here..." />
        <div class="options">
          <div class="select-container">
            <select id="custom-select" class="custom-select" v-model="selectedDomain">
              <option value="" disabled selected>Choose Domain</option>
              <option value="bit.ly">Bit.ly</option>
              <option value="shorten.link">Shorten.link</option>
              <option value="alt.mini">Alt.mini</option>
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
    <div class="leftBackground">
      <!-- Your SVG or other background elements -->
    </div>
    <div class="rightBackground">
      <!-- Your SVG or other background elements -->
    </div>
  </section>
</template>

<script></script>

<style scoped>
/* Add your styles here */
</style>
