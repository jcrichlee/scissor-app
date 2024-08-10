<template>
  <router-view />
  <PreloaderComponent :isLoading="isLoading" />
</template>

<script>
import { ref } from "vue";
import PreloaderComponent from "./components/PreloaderComponent.vue";
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    PreloaderComponent,
  },
  setup() {
    const isLoading = ref(true);

    // Simulate a loading process, e.g., fetching data or waiting for async operations
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);

    return {
      isLoading,
    };
  },
};
</script>
