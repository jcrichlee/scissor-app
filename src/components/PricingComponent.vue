<template>
  <section id="pricing" class="pricing">
    <div class="middle">
      <img
        :src="dividerSrc"
        class="divider"
        alt="Stylized divider for the title."
      />
      <div class="text">
        <h2>A <span>price perfect</span> for your needs.</h2>
        <p>
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>
    </div>
    <div class="card-container">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        :class="['card', plan.stacked ? 'stacked-card' : '']"
      >
        <div class="cardDescription">
          <div class="plan">{{ plan.name }}</div>
          <div class="cardDetails">
            <div class="subscription">
              <h3 class="amount">{{ plan.price }}</h3>
              <p>{{ plan.description }}</p>
            </div>
            <div class="benefits">
              <div
                v-for="(benefit, index) in plan.benefits"
                :key="index"
                class="item"
              >
                <img :src="getIconSrc(benefit.icon)" alt="tick" />
                <p>{{ benefit.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cta">
      <a href="#getCustomPricing" class="secondary">Get Custom Pricing</a>
      <a href="#selectPricing" class="primary">Select Pricing</a>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

// Import images directly
import checkCircleBlue from "@/assets/images/check-circle-blue.png";
import whyScissorsDivider from "@/assets/images/whyScissorsDivider.png";

export default defineComponent({
  data() {
    return {
      plans: [
        {
          name: "Basic",
          price: "Free",
          description: "Free plan for all users",
          benefits: [
            { icon: "check-circle-blue", text: "Unlimited URL Shortening" },
            { icon: "check-circle-blue", text: "Basic Link Analysis" },
            { icon: "check-circle-blue", text: "Customizable Short Links" },
            { icon: "check-circle-blue", text: "Standard Support" },
            { icon: "check-circle-blue", text: "Ad-supported" },
          ],
          stacked: false,
        },
        {
          name: "Professional",
          price: "$15/month",
          description: "Ideal for business creators",
          benefits: [
            { icon: "check-circle-blue", text: "Enhanced Link Analytics" },
            { icon: "check-circle-blue", text: "Custom Branded Domains" },
            {
              icon: "check-circle-blue",
              text: "Advanced Link Customization",
            },
            { icon: "check-circle-blue", text: "Priority Support" },
            { icon: "check-circle-blue", text: "Ad-free Experience" },
          ],
          stacked: false,
        },
        {
          name: "Teams",
          price: "$25/month",
          description: "Share with up to 10 users",
          benefits: [
            { icon: "check-circle-blue", text: "Team Collaboration" },
            {
              icon: "check-circle-blue",
              text: "User Roles and Permissions",
            },
            { icon: "check-circle-blue", text: "Enhanced Security" },
            { icon: "check-circle-blue", text: "API Access" },
            {
              icon: "check-circle-blue",
              text: "Dedicated Account Manager",
            },
          ],
          stacked: false,
        },
      ],
    };
  },
  computed: {
    dividerSrc() {
      return whyScissorsDivider;
    },
  },
  methods: {
    getIconSrc(iconName) {
      const iconMap = {
        "check-circle-blue": checkCircleBlue,
        // Add more icon mappings here if needed
      };
      return iconMap[iconName] || ""; // Return an empty string if the icon is not found
    },
  },
});
</script>

<style scoped>
/* Your styles here */
</style>
