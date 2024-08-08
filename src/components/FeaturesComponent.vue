<template>
  <section id="features">
    <h2>
      One Stop <br />
      Four <span>Possibilities</span>
    </h2>
    <div class="metrics">
      <div class="description">
        <h3>{{ formatNumber(animatedActiveUsers) }}</h3>
        <p>Active Users</p>
      </div>
      <div class="description xx">
        <h3>{{ formatNumber(animatedLinksCreated) }}</h3>
        <p>Links & QR codes created</p>
      </div>
      <div class="description xxx">
        <h3>{{ formatNumber(animatedClickedScanned) }}</h3>
        <p>Clicked & Scanned connections</p>
      </div>
      <div class="description">
        <h3>{{ formatNumber(animatedAppIntegrations) }}</h3>
        <p>App Integrations</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesComponent",
  data() {
    return {
      activeUsers: 186765,
      linksCreated: 605631428319,
      clickedScanned: 386734258,
      appIntegrations: 320865,

      
      animatedActiveUsers: 0,
      animatedLinksCreated: 0,
      animatedClickedScanned: 0,
      animatedAppIntegrations: 0,
    };
  },
  mounted() {
    this.animateNumbers();
  },
  methods: {
    animateNumbers() {
      const duration = 5000;
      const frameDuration = 1000 / 40;
      const totalFrames = Math.round(duration / frameDuration);

      const easeOutQuad = (t) => t * (2 - t);

      const animateValue = (prop, start, end) => {
        let frame = 0;
        const animate = () => {
          frame++;
          const progress = frame / totalFrames;
          const easedProgress = easeOutQuad(progress);
          this[prop] = Math.round(start + (end - start) * easedProgress);
          if (frame < totalFrames) {
            requestAnimationFrame(animate);
          }
        };
        animate();
      };

      animateValue("animatedActiveUsers", 0, this.activeUsers);
      animateValue("animatedLinksCreated", 0, this.linksCreated);
      animateValue("animatedClickedScanned", 0, this.clickedScanned);
      animateValue("animatedAppIntegrations", 0, this.appIntegrations);
    },
    formatNumber(value) {
      if (value >= 1_000_000_000) {
        return (value / 1_000_000_000).toFixed(1) + "B";
      } else if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + "M";
      } else if (value >= 1_000) {
        return (value / 1_000).toFixed(1) + "K";
      }
      return value.toString();
    },
  },
};
</script>

<style scoped>
/* Add scoped styles specific to the FeaturesComponent here */
</style>
