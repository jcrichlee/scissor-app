<template>
  <header>
    <a href="./" class="logo">
      <img src="../assets/images/logo.png" alt="Logo" />
    </a>
    <nav>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </label>
      <ul class="menu">
        <li><a href="#myurls">My URLs</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="./#analytics">Analytics</a></li>
        <li><a href="#faqs">FAQs</a></li>
      </ul>
    </nav>
    <div class="cta">
      <a href="#" class="secondary">Login</a>
      <a href="#" class="primary">Try for free</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
