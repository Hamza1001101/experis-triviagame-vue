<template>
  <div class="container">
    <Nav />
    <StartGame @review-submitted="addReview"> </StartGame>

    <li v-for="query in queries" :key="query">{{ query }}</li>
  </div>
</template>
<script>
import StartGame from "./components/StartGame.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
    StartGame,
    // Form
  },
  data() {
    return {
      queries: [],
    };
  },
  methods: {
    addReview(query) {
      this.queries.push(query);
    },
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fffcf7;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
  cursor: pointer;
}
li {
  list-style-type: none;
}
.container {
  padding: 4rem;
}
</style>
