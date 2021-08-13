<template>
  <div class="result-wrapper">
    <h3 class="result-header">Result component</h3>
    <div>
      <h5>Your score is</h5>
      <p>
        You asnwered correct {{ score }} of possible
        {{ numberOfQuestions }} questions
      </p>
      <p>Your total points are {{ totalPoints }}</p>
    </div>
    <div
      class="questions-wrapper"
      v-for="questionArr in questions"
      :key="questionArr"
    >
      <h4>List of all the questions and thier correct answers</h4>
      <div v-for="question in questionArr" :key="question">
        <p>{{ question.question }}</p>
        --> {{ question.correct_answer }}
      </div>
      <button class="q-button">Play Again</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Result",
  props: {
    score: null,
    numberOfQuestions: Number,
    totalPoints: Number,
    questions: null,
    index: null,
  },
};
</script>
<style scoped>
.result-wrapper {
  border: 1px solid blue;
  padding: 1rem;
  margin-top: 3.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2rem;
}
.result-header {
  grid-column: 1/-1;
  justify-self: center;
}
.questions-wrapper {
  border: 1px red solid;
}
.q-button {
  background-color: rebeccapurple;
}
</style>