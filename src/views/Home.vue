<template>
  <div>
    <StartGame @questions-submitted="showData" />
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
      questions: [],
    };
  },
  methods: {
    showData(query) {
      this.questions.push(query);
    },
  },
};
</script>

<style scoped>
</style>