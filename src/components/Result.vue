<template>
  <div class="result-wrapper">
    <h1 class="result-header">Result component</h1>
    <div class="score-wrapper">
      <h3>Your score is {{ score }}</h3>
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
      <h3>List of all the questions and thier correct answers</h3>
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
  grid-gap: 2rem;
}
.result-header {
  grid-column: 1/-1;
  justify-self: center;
}
.questions-wrapper {
  border: 1px red solid;
  padding: 1rem;
}
.q-button {
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
  border: 1px solid red;
}
</style>