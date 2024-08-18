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
        <li><router-link to="{path: '/profile', hash: '#'}">My URLs</router-link></li>
        <li><router-link to="{path: '/', hash: '#features'}">Features</router-link></li>
        <li><router-link to="{path: '/', hash: '#pricing'}">Pricing</router-link></li>
        <li><router-link to="{path: '/', hash: '#analytics'}">Analytics</router-link></li>
        <li><router-link to="{path: '/', hash: '#faqs'}">FAQs</router-link></li>
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
