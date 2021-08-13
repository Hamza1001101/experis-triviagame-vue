<template>
  <div>
    <div class="quiz-container">
      <div class="q-wrapper" v-for="questions in quiz" :key="questions">
        <div v-for="(q, index) in questions" :key="q">
          <div v-show="index === quizIndex">
            <h4>Questions Component</h4>
            <p>{{ q.question }}</p>
            <label class="answers" v-for="m in q.answers" :key="m">
              <button
                v-on:click="next($event)"
                v-bind:value="q.correct_answer"
                class="answer-button"
              >
                {{ m }}
              </button>
            </label>

            <!-- The two navigation buttons -->
            <!-- Note: prev is hidden on first question 
            <button v-if="questionIndex > 0" v-on:click="prev">prev</button>
            <button v-on:click="next">next</button>-->
          </div>
        </div>
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
    //attributesQuiz: [Object, Array],
    questionData: null,
  },

  data() {
    return {
      quiz: this.questionData,
      quizIndex: 0,
      //userResponses: Array(this.questionData.length).fill(false),
      //clickedButton: null,
      score: 0,
      points: 0,
      numberOfQuestions: 0,
    };
  },

  methods: {
    //go to next page
    next(e) {
      this.quizIndex++;
      let correctAnswer = e.target.value;
      let userResponse = e.target.innerText;

      if (correctAnswer === userResponse) {
        this.score++;
        this.points += 10;
      }
      console.log("quizIndex", this.quizIndex);

      //console.log("This is userResponse=", userResponse);
      //console.log("This is the correct answer", correctAnswer);
      //console.log(this.getQuestionLength());
    },
    getQuestionLength() {
      let index = 0;
      for (let i = 0; i < this.quiz.length; i++) {
        index++;
      }
      this.numberOfQuestions = index;
      return this.numberOfQuestions;
    },
    /*prev() {
      this.quizIndex--;
    },*/
  },
};
</script>
<style scoped>
.quiz-container {
  border: 1px red solid;
  margin-top: 3.5rem;
}
.q-wrapper {
  border: 1px solid blue;
  padding: 2rem;
}
.answer-button {
  cursor: pointer;

  background: #2274a5;
  color: #fff;
}
</style>