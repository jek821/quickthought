<template>
  <div id="app">
    <header>
      <h1>My App</h1>
    </header>
    <main>
      <HomePage v-if="currentPage === 'HomePage'" @change-page="changePage" />
      <CreateAccount v-if="currentPage === 'CreateAccount'" @change-page="changePage" />
      <ExampleButtonPage v-if="currentPage === 'ExampleButtonPage'" @change-page="changePage" />
    </main>
    <footer>
      <p>&copy; 2023 My App</p>
    </footer>
  </div>
</template>

<script>
import HomePage from './views/homePage.vue';
import CreateAccount from './views/create_account.vue';
import ExampleButtonPage from './views/example_button.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    CreateAccount,
    ExampleButtonPage,
  },
  data() {
    return {
      currentPage: 'HomePage', // Default page
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

header {
  background-color: #f4f4f4;
  padding: 20px;
}

footer {
  background-color: #f4f4f4;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>