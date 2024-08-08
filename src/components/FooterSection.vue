<template>
  <div class="footerSection">
    <h4 class="bold">{{ title }}</h4>
    <div class="links">
      <a v-for="link in links" :key="link.href" :href="link.href">{{
        link.text
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
