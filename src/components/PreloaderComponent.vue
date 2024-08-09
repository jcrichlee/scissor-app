<template>
  <div v-if="isLoading" class="preloader-overlay">
    <div class="preloader">
      <!-- Original preloader animation with squares -->
      <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreloaderComponent',
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
/* Overlay and Centering Styles */
.preloader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.904);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Loader Styles */
.loader {
  position: relative;
  width: 96px;
  height: 96px;
  transform: rotate(45deg);
}

.loader-square {
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  margin: 2px;
  border-radius: 0px;
  background: white;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  animation: square-animation 10s ease-in-out infinite both;
}

.loader-square:nth-of-type(1) {
  animation-delay: 0s;
}

.loader-square:nth-of-type(2) {
  animation-delay: -1.4285714286s;
}

.loader-square:nth-of-type(3) {
  animation-delay: -2.8571428571s;
}

.loader-square:nth-of-type(4) {
  animation-delay: -4.2857142857s;
}

.loader-square:nth-of-type(5) {
  animation-delay: -5.7142857143s;
}

.loader-square:nth-of-type(6) {
  animation-delay: -7.1428571429s;
}

.loader-square:nth-of-type(7) {
  animation-delay: -8.5714285714s;
}

/* Keyframes */
@keyframes square-animation {
  0% {
    left: 0;
    top: 0;
  }

  10.5% {
    left: 0;
    top: 0;
  }

  12.5% {
    left: 32px;
    top: 0;
  }

  23% {
    left: 32px;
    top: 0;
  }

  25% {
    left: 64px;
    top: 0;
  }

  35.5% {
    left: 64px;
    top: 0;
  }

  37.5% {
    left: 64px;
    top: 32px;
  }

  48% {
    left: 64px;
    top: 32px;
  }

  50% {
    left: 32px;
    top: 32px;
  }

  60.5% {
    left: 32px;
    top: 32px;
  }

  62.5% {
    left: 32px;
    top: 64px;
  }

  73% {
    left: 32px;
    top: 64px;
  }

  75% {
    left: 0;
    top: 64px;
  }

  85.5% {
    left: 0;
    top: 64px;
  }

  87.5% {
    left: 0;
    top: 32px;
  }

  98% {
    left: 0;
    top: 32px;
  }

  100% {
    left: 0;
    top: 0;
  }
}
</style>
