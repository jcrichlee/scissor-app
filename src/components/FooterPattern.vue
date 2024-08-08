<template>
  <div :class="patternId">
    <svg
      :width="patternWidth"
      :height="patternHeight"
      viewBox="0 0 543 358"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.7">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M74.4161 555.549C59.9173 509.393 82.0605 388.172 101.659 336.012C119.873 287.541 131.258 266.471 175.338 227.821C217.618 190.749 299.67 161.723 351.352 137.789C417.586 107.116 490.166 24.6264 545.847 47.1018C603.125 70.2218 567.554 155.888 576.029 213.26C581.664 251.399 589.393 286.419 587.117 326.479C584.285 376.323 605.112 432.504 561.176 474.632C517.302 516.7 446.87 493.706 389.393 516.064C318.652 543.582 258.055 625.989 190.497 618.821C125.068 611.878 91.1911 608.95 74.4161 555.549Z"
          :fill="'url(#' + gradientId + ')'"
        />
        <defs>
          <linearGradient
            :id="gradientId"
            x1="88.697"
            y1="617.5"
            x2="404.746"
            y2="72.5861"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              v-for="(color, index) in gradientColors"
              :key="index"
              :offset="color.offset || 0"
              :stop-color="color.stopColor"
              :stop-opacity="color.stopOpacity"
            />
          </linearGradient>
        </defs>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    patternId: {
      type: String,
      required: true,
    },
    patternWidth: {
      type: Number,
      required: true,
    },
    patternHeight: {
      type: Number,
      required: true,
    },
    gradientId: {
      type: String,
      required: true,
    },
    gradientColors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
