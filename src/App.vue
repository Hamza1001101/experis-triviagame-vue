<template>

  <StartGame @review-submitted='addReview'>  </StartGame> 
  
  <li v-for="query in queries" :key="query"> {{query}} </li>
</template>

<script>

import StartGame from './components/StartGame.vue'

export default {
  name: 'App',
  components: {

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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #FFFCF7;
}
a {
  text-decoration: none;
  cursor: pointer;
}
li {
  list-style-type: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
}
</style>
