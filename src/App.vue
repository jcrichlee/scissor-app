<template>
  <PreloaderComponent :isLoading="isLoading" />
  <router-view/>
</template>

<script>
import { ref } from 'vue';
import PreloaderComponent from './components/PreloaderComponent.vue';

export default {
  name: 'App',
  components: {
    PreloaderComponent
  },
  setup() {
    const isLoading = ref(true);

    // Simulate a loading process, e.g., fetching data or waiting for async operations
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);

    return {
      isLoading
    }
  }
}
</script>