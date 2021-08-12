<template>
  <div>
    <div class="quiz-container">
      <div v-for="questions in quiz" :key="questions">
        <h4>Questions Component</h4>
        <div v-for="(q, index) in questions" :key="q">
          <div class="q-wrapper" v-show="index === quizIndex">
            <p>{{ q.question }}</p>
            <label class="answers" v-for="m in q.answers" :key="m">
              <button v-on:click="next" class="button">
                {{ m }}
              </button>
            </label>

            <h4>{{ score() }}</h4>
            <!-- The two navigation buttons -->
            <!-- Note: prev is hidden on first question 
            <button v-if="questionIndex > 0" v-on:click="prev">prev</button>
            <button v-on:click="next">next</button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Questions",
  props: {
    //attributesQuiz: [Object, Array],
    questionData: [],
  },
  data() {
    return {
      quiz: this.questionData,
      quizIndex: 0,
      userResponses: Array(this.questionData.length).fill(false),
    };
  },
  methods: {
    //go to next page
    next() {
      this.quizIndex++;
    },
    /*prev() {
      this.quizIndex--;
    },*/
    score() {
      //console.log(this.quiz);
    },
  },
};
</script>
<style scoped>
.q-wrapper {
  border: 1px solid blue;
  margin: 1rem auto;
  padding: 1rem;
  max-width: 750px;
}
.button {
  cursor: pointer;

  display: inline-block;
  background: #2274a5;
  color: #fff;
  border: 0;
  padding: 12px;
  margin-right: 1rem;
  border-radius: 5px;
  font-size: 1rem;
}
.button:focus {
  outline: none;
}
.button:hover {
  transform: scale(0.98);
}
</style>