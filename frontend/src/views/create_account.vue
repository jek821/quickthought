<template>
    <div>
      <h2>Create Account</h2>
      <form @submit.prevent="createAccount">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
        <br />
        <button type="submit">Create Account</button>
      </form>
      <ExampleButton @click="goBack">Go Back</ExampleButton>
    </div>
  </template>
  
  <script>
  import ExampleButton from '../components/example_button.vue';
  
  export default {
    name: 'CreateAccount',
    components: {
      ExampleButton,
    },
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      createAccount() {
        // Handle account creation logic here
        console.log('Creating account with:', this.username, this.password);
        alert(`Account created for ${this.username}`);
      },
      goBack() {
        this.$emit('change-page', 'HomePage');
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    margin: 20px;
  }
  
  label {
    display: block;
    margin: 10px 0 5px;
  }
  
  input {
    padding: 8px;
    margin-bottom: 10px;
    width: 200px;
  }
  
  button {
    margin-top: 10px;
  }
  </style>