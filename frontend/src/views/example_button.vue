<template>
    <div>
      <h2>Example Button Page</h2>
      <ExampleButton @click="handleClick">Click Me!</ExampleButton>
      <ExampleButton @click="goBack">Go Back</ExampleButton>
    </div>
  </template>
  
  <script>
  import ExampleButton from '../components/example_button.vue';
  
  export default {
    name: 'ExampleButtonPage',
    components: {
      ExampleButton,
    },
    methods: {
      handleClick() {
        alert('Button clicked!');
      },
      goBack() {
        this.$emit('change-page', 'HomePage');
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 20px;
  }
  </style>