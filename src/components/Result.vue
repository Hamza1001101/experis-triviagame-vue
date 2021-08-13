<!-- This file is just for testing only. We are not using this file at the moment 
 If you want to can completely delete all the code that is inside this file. 
-->
<template>
  <div>
    <div>
      <h3>Simple Quiz</h3>

      <div class="question" v-for="questions in quiz" :key="questions">
        <div class="q-container" v-for="(q, index) in questions" :key="q">
          <div class="q-wrapper" v-show="index === quizIndex">
            <p>{{ q.question }}</p>
            <label :for="key" v-for="(answer, key) in q.answers" :key="answer">
              <!--<input type="radio" id="#" />-->
              <button
                :id="key"
                :value="key"
                @click="checkAnswer($event), next()"
              >
                {{ answer }}
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Result",
  props: {
    data: null,
  },
  data() {
    return {
      quiz: this.data,
      selectedAnswer: "",
      quizIndex: 0,
      count: this.data.length,
      correctAnswer: 0,
      wrongAnswer: 0,
    };
  },
  methods: {
    test() {
      console.log("Iam array= ", this.quiz);
    },
    checkAnswer(e) {
      this.selectedAnswer = e.target.value;
      if (
        this.selectedAnswer === this.quiz[this.quizIndex][this.correctAnswer]
      ) {
        console.log("Weeeey");
      }
      //console.log(this.selectedAnswer);
    },
    next() {
      this.quizIndex++;
      this.selectedAnswer = "";
    },
  },
};
</script>
<style scoped>
</style>