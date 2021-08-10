<template>


  <StartGame />
</template>

<script>

import StartGame from './components/StartGame.vue'


export default {
  name: 'App',
  components: {

    StartGame, 
  
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
