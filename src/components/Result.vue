<template>
  <div class="result-wrapper">
    <h1 class="result-header">Your Results</h1>
    <div class="score-wrapper">
      <h4>Your total score is {{ totalPoints }} points</h4>
      <p>
        You asnwered correct {{ score }} of possible
        {{ numberOfQuestions }} questions
      </p>
    </div>
    <div
      class="questions-wrapper"
      v-for="questionArr in questions"
      :key="questionArr"
    >
      <h4>List of all the questions and thier correct answers</h4>
      <table>
        <thead>
          <tr>
            <th>No:</th>
            <th>Question</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(question, index) in questionArr" :key="question">
            <td>{{ index + 1 }}</td>
            <td>{{ question.question }}</td>
            <td>{{ question.correct_answer }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="resetScreen()" class="replay-button">Play Again</button>
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
  methods: {
    //Reset everything and reload the page.
    resetScreen() {
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.result-wrapper {
  padding: 1rem;
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 2rem;
}
.result-header {
  grid-column: 1/-1;
  justify-self: center;
}
.questions-wrapper {
  padding: 1rem;
  background-color: #f8f8ec;
  box-shadow: 5px 5px 15px 5px #000000;
}

.replay-button {
  background-color: rebeccapurple;
  margin: 2rem 0;
}
table {
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddd;
  text-align: center;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}

.score-wrapper {
  box-shadow: 5px 5px 15px 5px #000000;
  padding: 1rem;
  background-color: #f8f8ec;
}
</style>