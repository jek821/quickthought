<template>
    <button @click="onClick" class="example-button">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'ExampleButton',
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  .example-button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
    border-radius: 8px;
  }
  
  .example-button:hover {
    background-color: #45a049;
  }
  </style>