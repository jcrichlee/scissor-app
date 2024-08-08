<template>
  <section id="faqs">
    <div class="faqWrapper">
      <div class="faqLeft">
        <img
          src="../assets/images/whyScissorsDivider.png"
          class="divider"
          alt="Stylized divider for the title."
        />
        <div class="faqText">
          <h2>FAQs</h2>
        </div>
      </div>
      <!-- Accordion -->
      <div>
        <div class="accordion">
          <details v-for="(faq, index) in faqs" :key="index" class="faqContent">
            <summary>{{ faq.question }}</summary>
            <p>{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </div>
    <div class="faqLeftPattern">
      <svg
        width="350"
        height="860"
        viewBox="0 0 350 860"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
    </div>
    <div class="faqRightPattern">
      <svg
        width="374"
        height="439"
        viewBox="0 0 374 439"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getFaqs"]),
    faqs() {
      return this.getFaqs;
    },
  },
};
</script>
