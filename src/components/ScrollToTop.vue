<template>
  <button @click="scrollToTop" class="scrollToTop" aria-label="Scroll to top">
    &#8593;
  </button>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
<style scoped></style>
