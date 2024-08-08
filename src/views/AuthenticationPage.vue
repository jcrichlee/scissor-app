<template>
  <div>
    <button @click="signup">Signup</button>
    <button @click="signin">Signin</button>
  </div>
</template>

<script>
export default {
  methods: {
    signup() {
      // Handle signup logic here
    },
    signin() {
      // Handle signin logic here
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
div,
button {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
button {
  background-color: powderblue;
  color: navy;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  font-weight: 700;
}
</style>
