<template>
  <div class="container">
    <Nav />
    <h1 class="header">Welcome Trivia App</h1>
    <StartGame @params-submitted="addParam" @questions-submitted="showData">
    </StartGame>

    <!-- <li v-for="query in questions" :key="query">{{ query }}</li>-->
    <Questions :questionData="questions" />
  </div>
</template>
<script>
import StartGame from "./components/StartGame.vue";
import Nav from "./components/Nav.vue";

import Questions from "./components/Questions.vue";

export default {
  name: "App",
  components: {
    Nav,
    StartGame,

    Questions,
    // Form
  },
  data() {
    return {
      queries: [],
      questions: [],
    };
  },
  methods: {
    addParam(query) {
      this.queries.push(query);
    },
    showData(query) {
      this.questions.push(query);
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
.header {
  text-align: center;
  margin-top: 4rem;
}
</style>
