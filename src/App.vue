<script setup>
import { RouterView } from "vue-router";
import PreloaderComponent from "./components/PreloaderComponent.vue";
import { ref, provide } from "vue";
import { auth } from "@/firebase"; // Ensure you import necessary Firebase functions

const userId = ref(""); // Define userId 

// Provide userId to the entire app
provide('userId', userId);

// Function to update userId when user signs in or signs up
const updateUserId = (id) => {
  userId.value = id;
};

// Listen for authentication state changes
auth.onAuthStateChanged(user => {
  if (user) {
    updateUserId(user.uid);
  } else {
    updateUserId("");
  }
});
</script>

<template>
  <header>
    <label for="menu-toggle" class="menu-icon">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </label>
    <nav>
      <a href="./" class="logo">
        <img src="./assets/images/logo.png" alt="Logo" />
      </a>
      <input type="checkbox" id="menu-toggle" />
      <ul class="menu">
        <li><a href="/profile">My URLs</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Analytics</a></li>
        <li><a href="">FAQs</a></li>
      </ul>
      <div class="cta">
        <a href="/auth" class="secondary">Login</a>
        <a href="/auth" class="primary">Try for free</a>
      </div>
    </nav>
  </header>
  <RouterView />
  <PreloaderComponent />
</template>

<style scoped>
header {
  gap: 0;
  flex-direction: row-reverse;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  position: relative;
  padding-top: 0;
}

/* Default menu and logo styles */
nav .logo {
  display: flex;
}

nav ul.menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-around;
  align-items: center;
}

nav ul.menu li {
  margin: 0;
  font-weight: 900;
}

/* Show the menu icon by default on smaller screens */
.menu-icon {
  display: none;
}

#menu-toggle:checked ~ header {
  height: 100vh;
}

#menu-toggle:checked ~ ul.menu {
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  position: absolute;
  margin: 0;
  gap: 0;
}

#menu-toggle:checked ~ ul.menu li {
  width: 100vw;
  text-align: center;
  padding: 16px;
}

#menu-toggle:checked ~ label.menu-icon {
  display: block; /* Show menu icon when menu is toggled */
}

/* Responsive adjustments */
@media (max-width: 37.5rem) {
  nav {
    justify-content: space-between;
  }

  .menu-icon {
    display: block;
    cursor: pointer;
  }

  nav ul.menu {
    display: none;
  }

  label.menu-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    z-index: 9999;
    position: absolute;
  }

  #menu-toggle:checked ~ ul.menu {
    display: flex;
    flex-direction: column;
    margin: -24px;
    padding: 24px;
  }

  #menu-toggle:checked ~ .cta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 240px;
    width: 100vw;
    margin-left: -1.5rem;
    background-color: white;
    padding: 24px;
    height: auto;
  }

  #menu-toggle:checked ~ nav {
    flex-direction: column;
    align-items: flex-start;
  }


}
</style>
