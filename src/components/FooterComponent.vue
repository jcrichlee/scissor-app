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

    <FooterPattern
      :patternId="'footerLeftPattern'"
      :patternWidth="508"
      :patternHeight="541"
      :gradientId="'paint0_linear'"
      :gradientColors="[
        { stopColor: '#9EE6F7', stopOpacity: 0 },
        { stopColor: '#9EE6F7', stopOpacity: 0.46, offset: 1 },
      ]"
    />

    <FooterPattern
      :patternId="'footerRightPattern'"
      :patternWidth="543"
      :patternHeight="358"
      :gradientId="'paint1_linear'"
      :gradientColors="[
        { stopColor: '#9EE6F7', stopOpacity: 0 },
        { stopColor: '#9EE6F7', stopOpacity: 0.46, offset: 1 },
      ]"
    />

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
import { mapGetters } from 'vuex';
import FooterSection from "./FooterSection.vue";
import FooterPattern from "./FooterPattern.vue";

export default {
  components: {
    FooterSection,
    FooterPattern,
  },
  computed: {
    ...mapGetters({
      scissorsLinks: 'getScissorsLinks',
      resourcesLinks: 'getResourcesLinks',
      solutionsLinks: 'getSolutionsLinks',
      featuresLinks: 'getFeaturesLinks',
      productsLinks: 'getProductsLinks',
      legalLinks: 'getLegalLinks',
      companyLinks: 'getCompanyLinks',
    }),
  },
};
</script>

<style scoped></style>
