<template>
  <section id="pricing" class="pricing">
    <div class="middle">
      <img
        src="@/assets/images/whyScissorsDivider.png"
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
                <img
                  :src="require(`@/assets/images/${benefit.icon}`)"
                  alt="tick"
                />
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
export default {
  data() {
    return {
      plans: [
        {
          name: "Basic",
          price: "Free",
          description: "Free plan for all users",
          benefits: [
            { icon: "check-circle-blue.png", text: "Unlimited URL Shortening" },
            { icon: "check-circle-blue.png", text: "Basic Link Analysis" },
            { icon: "check-circle-blue.png", text: "Customizable Short Links" },
            { icon: "check-circle-blue.png", text: "Standard Support" },
            { icon: "check-circle-blue.png", text: "Ad-supported" },
          ],
          stacked: false,
        },
        {
          name: "Professional",
          price: "$15/month",
          description: "Ideal for business creators",
          benefits: [
            { icon: "check-circle-blue.png", text: "Enhanced Link Analytics" },
            { icon: "check-circle-blue.png", text: "Custom Branded Domains" },
            {
              icon: "check-circle-blue.png",
              text: "Advanced Link Customization",
            },
            { icon: "check-circle-blue.png", text: "Priority Support" },
            { icon: "check-circle-blue.png", text: "Ad-free Experience" },
          ],
          stacked: false,
        },
        {
          name: "Teams",
          price: "$25/month",
          description: "Share with up to 10 users",
          benefits: [
            { icon: "check-circle-blue.png", text: "Team Collaboration" },
            {
              icon: "check-circle-blue.png",
              text: "User Roles and Permissions",
            },
            { icon: "check-circle-blue.png", text: "Enhanced Security" },
            { icon: "check-circle-blue.png", text: "API Access" },
            {
              icon: "check-circle-blue.png",
              text: "Dedicated Account Manager",
            },
          ],
          stacked: false,
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
