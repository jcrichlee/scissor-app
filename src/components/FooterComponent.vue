<template>
  <footer class="footer">
    <section class="footerLeft">
      <div class="logoBlack">
        <img src="@/assets/images/logoBlack.png" alt="Scissor Logo" />
      </div>
      <div class="socialIcons">
        <img src="@/assets/images/twitter.png" alt="Twitter" />
        <img src="@/assets/images/instagram.png" alt="Instagram" />
        <img src="@/assets/images/linkedin.png" alt="LinkedIn" />
        <img src="@/assets/images/facebook.png" alt="Facebook" />
      </div>
    </section>

    <section class="footerRight">
      <div class="section1">
        <FooterSection title="Why Scissors?" :links="scissorsLinks" />
        <FooterSection title="Resources" :links="resourcesLinks" />
      </div>
      <div class="section2">
        <FooterSection title="Solutions" :links="solutionsLinks" />
        <FooterSection title="Features" :links="featuresLinks" />
      </div>
      <div class="section3">
        <FooterSection title="Products" :links="productsLinks" />
        <FooterSection title="Legal" :links="legalLinks" />
      </div>
      <div class="section4">
        <FooterSection title="Company" :links="companyLinks" />
      </div>
    </section>

    <div class="footerLeftPattern">
      <svg
        width="508"
        height="541"
        viewBox="0 0 508 541"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M76.21 62.958C123.75 71.9324 220.214 148.611 256.972 190.486C291.132 229.401 304.345 249.375 317.648 306.471C330.408 361.235 317.321 447.28 314.062 504.142C309.886 577.013 348.414 679.912 302.342 718.42C254.948 758.032 196.17 686.275 141.579 666.7C105.289 653.688 70.7602 643.994 36.5056 623.1C-6.11627 597.102 -65.4808 588.983 -81.9188 530.375C-98.3333 471.849 -44.8493 420.576 -37.468 359.348C-28.3839 283.988 -72.4886 191.697 -34.3162 135.498C2.6531 81.0705 21.2074 52.575 76.21 62.958Z"
            fill="url(#paint0_linear_1_495)"
            fill-opacity="0.3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.7867 175.082C101.896 175.166 143.55 187.407 179.293 217.953C212.51 246.34 234.462 291.03 251.219 338.678C267.293 384.379 252.576 424.602 254.927 474.743C257.94 539.002 303.318 630.069 266.811 671.173C229.255 713.457 171.664 660.428 122.464 652.245C89.758 646.804 58.8835 643.972 27.2275 631.325C-12.1614 615.588 -64.4639 618.176 -84.0816 569.721C-103.672 521.333 -61.8906 467.883 -61.0591 413.259C-60.0362 346.029 -106.754 272.693 -78.7202 217.44C-51.5701 163.93 11.0671 174.985 59.7867 175.082Z"
            fill="url(#paint1_linear_1_495)"
            fill-opacity="0.4"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M69.371 273.849C108.365 288.12 144.644 313.402 171.997 353.5C197.416 390.763 209.325 439.201 215.867 488.604C222.141 535.987 215.688 581.694 208.414 628.531C199.09 688.553 209.195 773.74 167.626 799.178C124.865 825.346 81.5112 757.237 37.4765 733.137C8.20472 717.117 -19.8625 704.11 -46.8031 681.825C-80.325 654.095 -129.264 638.843 -138.303 587.735C-147.329 536.697 -98.5467 501.701 -87.4787 451.822C-73.8563 390.432 -103.309 307.342 -66.9225 266.054C-31.6835 226.07 24.2572 257.336 69.371 273.849Z"
            fill="url(#paint2_linear_1_495)"
            fill-opacity="0.6"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_495"
            x1="-22.6874"
            y1="637.041"
            x2="222.351"
            y2="204.828"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6F7" stop-opacity="0" />
            <stop offset="1" stop-color="#9EE6F7" stop-opacity="0.46" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_495"
            x1="-33.2834"
            y1="649.344"
            x2="119.695"
            y2="224.941"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6F7" stop-opacity="0" />
            <stop offset="1" stop-color="#9EE6F7" stop-opacity="0.46" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_495"
            x1="-106.255"
            y1="677.973"
            x2="141.281"
            y2="359.916"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#005AE2" />
            <stop offset="1" stop-color="#73E6FF" stop-opacity="0.38" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="footerRightPattern">
      <svg
        width="543"
        height="358"
        viewBox="0 0 543 358"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74.4161 555.549C59.9173 509.393 82.0605 388.172 101.659 336.012C119.873 287.541 131.258 266.471 175.338 227.821C217.618 190.749 299.67 161.723 351.352 137.789C417.586 107.116 490.166 24.6264 545.847 47.1018C603.125 70.2218 567.554 155.888 576.029 213.26C581.664 251.399 589.393 286.419 587.117 326.479C584.285 376.323 605.112 432.504 561.176 474.632C517.302 516.7 446.87 493.706 389.393 516.064C318.652 543.582 258.055 625.989 190.497 618.821C125.068 611.878 91.1911 608.95 74.4161 555.549Z"
            fill="url(#paint0_linear_1_491)"
            fill-opacity="0.3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M181.04 517.17C161.261 479.995 152.418 437.489 162.504 391.567C171.878 348.89 200.941 308.462 235.06 271.219C267.785 235.498 310.195 229.513 353.306 203.8C408.555 170.847 467.471 87.8944 520.932 100.711C575.928 113.895 556.314 189.685 572.294 236.933C582.915 268.34 594.974 296.903 598.745 330.783C603.437 372.939 630.378 417.844 596.895 457.989C563.458 498.079 496.623 486.432 448.059 511.451C388.287 542.246 345.639 618.021 283.695 619.348C223.705 620.632 203.924 560.181 181.04 517.17Z"
            fill="url(#paint1_linear_1_491)"
            fill-opacity="0.4"
          />
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M263.622 462.153C257.824 421.037 263.015 377.123 285.481 334.097C306.359 294.112 343.461 260.772 383.944 231.712C422.774 203.84 466.124 187.981 510.858 172.315C568.187 152.239 638.548 103.166 680.579 127.832C723.817 153.204 684.193 223.548 683.699 273.744C683.372 307.111 685.134 337.996 678.182 372.261C669.532 414.897 679.154 465.247 638.344 497.313C597.59 529.335 543.729 502.814 494.522 516.57C433.961 533.499 374.571 598.647 321.005 586.024C269.13 573.798 270.329 509.724 263.622 462.153Z"
            fill="url(#paint2_linear_1_491)"
            fill-opacity="0.6"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_491"
            x1="627.318"
            y1="372.108"
            x2="130.63"
            y2="359.783"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6F7" stop-opacity="0" />
            <stop offset="1" stop-color="#9EE6F7" stop-opacity="0.46" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_491"
            x1="643.164"
            y1="375.652"
            x2="196.766"
            y2="440.831"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6F7" stop-opacity="0" />
            <stop offset="1" stop-color="#9EE6F7" stop-opacity="0.46" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_491"
            x1="702.815"
            y1="426.507"
            x2="305.621"
            y2="358.159"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#005AE2" />
            <stop offset="1" stop-color="#73E6FF" stop-opacity="0.38" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="subFooter">
      <a href="#termsOfService">Terms of Service</a>
      <img src="@/assets/images/footerSubDivider.png" alt="divider" />
      <a href="#security">Security</a>
      <img src="@/assets/images/footerSubDivider.png" alt="divider" />
      <a href="#scissor2023">Scissor 2023</a>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex"
import FooterSection from "./FooterSection.vue"

export default {
  components: {
    FooterSection
  },
  computed: {
    ...mapGetters({
      scissorsLinks: "getScissorsLinks",
      resourcesLinks: "getResourcesLinks",
      solutionsLinks: "getSolutionsLinks",
      featuresLinks: "getFeaturesLinks",
      productsLinks: "getProductsLinks",
      legalLinks: "getLegalLinks",
      companyLinks: "getCompanyLinks"
    })
  }
}
</script>

<style scoped></style>
