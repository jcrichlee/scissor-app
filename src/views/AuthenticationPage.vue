<template>
  <div class="auth-container">
    <h2>{{ view === "signup" ? "Sign Up" : "Sign In" }}</h2>

    <div v-if="view === 'signup'">
      <input v-model="user.email" type="email" placeholder="Email" class="auth-input" />
      <input v-model="user.password" type="password" placeholder="Password" class="auth-input" />
      <input v-model="user.username" type="username" placeholder="Username" class="auth-input" />
      <input v-model="user.firstname" type="firstName" placeholder="Firstname" class="auth-input" />
      <input v-model="user.lastname" type="firstName" placeholder="Lastname" class="auth-input" />
      <button @click="signUp" class="auth-button">Sign Up</button>
    </div>

    <div v-else>
      <input v-model="user.email" type="email" placeholder="Email" class="auth-input" />
      <input v-model="user.password" type="password" placeholder="Password" class="auth-input" />
      <button @click="signIn" class="auth-button">Sign In</button>
    </div>

    <div class="button-container">
      <button @click="toggleView" class="auth-secondary">
        {{ view === "signup" ? "Switch to Sign In" : "Switch to Sign Up" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter(); // Initialize router
const view = ref("signup"); // Initialize with 'signup' view
const user = reactive({
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  username: ""
});

const toggleView = () => {
  view.value = view.value === "signup" ? "signin" : "signup";
};

const signUp = async () => {
  try {
    await store.dispatch("signUp", user);
    router.push("/profile"); // Redirect to /profile on successful sign-up
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

const signIn = async () => {
  try {
    await store.dispatch("signIn", user);
    router.push("/profile"); // Redirect to /profile on successful sign-in
  } catch (error) {
    console.log("Error signing in:", error.message);
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #b4d8ffb0;
  border-radius: 8px;
  text-align: center;
  margin-top: 96px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

.auth-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.auth-input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.25);
}

.button-container {
  display: flex;
  justify-content: center;
}

.auth-button {
  width: 48%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-button:hover {
  background-color: #0056b3;
}

.auth-secondary {
  width: 48%;
  border: none;
  color: #007bff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 24px;
  height: 40px;
}

.auth-button.secondary:hover {
  background-color: #5a6268;
}
</style>
