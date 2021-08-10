<template>



  <StartGame @review-submitted='addReview'>  </StartGame> 
  
  <li v-for="review in reviews" :key="review"> {{review}} </li>
</template>

<script>

import StartGame from './components/StartGame.vue'
//import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {

    StartGame, 
   // Form

  },
  data() {
   return {
     reviews: []
   }
  },
  methods: {
    addReview(review) {
      this.reviews.push(review)
    }
  }
}
</script>

<style>
body {
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
