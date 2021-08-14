<template>
  <div>
    <div class="quiz">
      <div class="q-wrapper" v-for="questions in quiz" :key="questions">
        <div v-for="(question, index) in questions" :key="question">
          <div class="quistion-container" v-show="index === quizIndex">
            <div class="extra-info">
              <h4>Question</h4>
              <p>Question: {{ quizIndex + 1 }} / {{ questions.length }}</p>
            </div>

            <p>{{ question.question }}</p>

            <div class="answer-wrapper">
              <label
                class="answers"
                v-for="answer in question.answers"
                :key="answer"
              >
                <button
                  v-on:click="next($event)"
                  v-bind:value="question.correct_answer"
                  class="answer-button"
                >
                  {{ answer }}
                </button>
              </label>
            </div>
          </div>
        </div>
        <!-- Show results whene all questions got answered -->
        <div v-if="quizIndex === questions.length">
          <Result
            :numberOfQuestions="questions.length"
            :score="score"
            :totalPoints="points"
            :questions="quiz"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Result from "./Result.vue";
export default {
  name: "Questions",
  components: {
    Result,
  },
  props: {
    questionData: null,
  },

  data() {
    return {
      quiz: this.questionData,
      quizIndex: 0,

      score: 0,
      points: 0,
      numberOfQuestions: 0,
    };
  },

  methods: {
    /**
     * Go to the next questions and calculate score
     */
    next(e) {
      this.quizIndex++;
      let correctAnswer = e.target.value;
      let userResponse = e.target.innerText;

      if (correctAnswer === userResponse) {
        this.score++;
        this.points += 10;
      }
    },
  },
};
</script>
<style scoped>
.quiz {
  margin-top: 3.5rem;
}
.q-wrapper {
  padding: 2rem;
}
.quistion-container {
  border: 1px solid pink;
  width: 35rem;
  background-color: #fafbf5;
  box-shadow: -5px 5px 5px 0px rgba(187, 171, 148, 0.75);
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 33rem;
  justify-content: center;
  padding-bottom: 3rem;
}
.extra-info {
  display: flex;
  justify-content: space-between;
}
.extra-info > p,
.extra-info > h4 {
  margin-top: 15px;
  margin-bottom: 15px;
}
.answer-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  border-top: 4px solid tomato;
  border-bottom: 4px solid tomato;
  padding: 1.5rem 0;
}
.answer-button {
  background: #2274a5;
  color: #fff;
  width: 100%;
}
</style>