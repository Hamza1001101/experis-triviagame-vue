<template>
  <div class="container">
    <Nav />
    <StartGame @review-submitted="addReview"> </StartGame>

<<<<<<< HEAD
    <li v-for="query in queries" :key="query">{{ query }}</li>
  </div>
</template>

<script>
import StartGame from "./components/StartGame.vue";
import Nav from "./components/Nav.vue";
//import DisplayQuestions from "./components/DisplayQuestions.vue";
=======
  <StartGame @review-submitted='addReview'>  </StartGame> 
  
  <li v-for="query in queries" :key="query"> {{query}} </li>
</template>

<script>

import StartGame from './components/StartGame.vue'
>>>>>>> 591d658fb90d77110853de129f5e728480c3cd6e

export default {
  name: "App",
  components: {
<<<<<<< HEAD
    StartGame,
    Nav,
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
=======

    StartGame, 
   // Form
  },
  data() {
   return {
     queries: []
   }
  },
  methods: {
    addReview(query) {
      this.queries.push(query)
    }
  }
} 
</script>

<style>
body, html {
>>>>>>> 591d658fb90d77110853de129f5e728480c3cd6e
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
<<<<<<< HEAD
.container {
  padding: 4rem;
=======
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
>>>>>>> 591d658fb90d77110853de129f5e728480c3cd6e
}
</style>
