<template>
  <div>
    <StartGame @params-submitted="addParam" @questions-submitted="showData" />
    <!--<Questions :questionData="questions" />-->
    <Questions :questionData="questions" />
  </div>
</template>
<script>
import StartGame from "../components/StartGame.vue";
import Questions from "../components/Questions.vue";

export default {
  components: {
    StartGame,
    Questions,
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

<style scoped>
</style>