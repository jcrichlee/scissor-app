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

<script>
export default {
  name: 'AnalyticsComponent',
  data() {
    return {
      url: '',
      selectedDomain: '',
      alias: '',
      trimmedUrls: [] // Store trimmed URLs
    }
  },
  methods: {
    async trimURL() {
      if (!this.url || !this.selectedDomain) {
        alert('Please enter a URL and select a domain.')
        return
      }

      const trimmedUrl = `${this.selectedDomain}/${this.alias ? this.alias : this.generateRandomAlias()}`

      // Store the trimmed URL
      this.storeTrimmedUrl(trimmedUrl)

      // Copy the trimmed URL to the clipboard
      await this.copyToClipboard(trimmedUrl)

      // Notify the user that the URL has been copied
      alert(`Trimmed URL created and copied to clipboard: ${trimmedUrl}`)
    },
    generateRandomAlias() {
      return Math.random().toString(36).substring(7) // Generates a random string as alias
    },
    storeTrimmedUrl(trimmedUrl) {
      this.trimmedUrls.push({
        originalUrl: this.url,
        trimmedUrl: trimmedUrl,
        domain: this.selectedDomain,
        alias: this.alias
      })

      // Reset fields after trimming
      this.url = ''
      this.selectedDomain = ''
      this.alias = ''
    },
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text)
        console.log('URL copied to clipboard')
      } catch (err) {
        console.error('Failed to copy: ', err)
      }
    }
  }
}
</script>

<style scoped></style>
