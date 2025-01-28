<template>
    <div>
      <h2>Welcome to My App</h2>
      <ExampleButton @click="goToCreateAccount">Create Account</ExampleButton>
      <ExampleButton @click="goToExampleButtonPage">Example Button Page</ExampleButton>
    </div>
  </template>
  
  <script>
  import ExampleButton from '../components/example_button.vue';
  
  export default {
    name: 'HomePage',
    components: {
      ExampleButton,
    },
    methods: {
      goToCreateAccount() {
        this.$emit('change-page', 'CreateAccount');
      },
      goToExampleButtonPage() {
        this.$emit('change-page', 'ExampleButtonPage');
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 20px;
  }
  </style>