<template>
  <div class="auth-container">
    <h2>Sign Up / Sign In</h2>
    <input v-model="email" type="email" placeholder="Email" class="auth-input" />
    <input v-model="password" type="password" placeholder="Password" class="auth-input" />
    <div class="button-container">
      <button @click="signUp" class="auth-button">Sign Up</button>
      <button @click="signIn" class="auth-button secondary">Sign In</button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
  justify-content: space-between;
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

.auth-button.secondary {
  background-color: #6c757d;
}

.auth-button.secondary:hover {
  background-color: #5a6268;
}
</style>
