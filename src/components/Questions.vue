<template>
  <div>
    <div class="quiz-container">
      <!--<div v-for="question in questionData" :key="question">
        <li v-for="q in question" :key="q">{{ q.question }}</li>
        <li v-for="q in question" :key="q">
          {{
            [...q.incorrect_answers, q.correct_answer].sort(() =>
              Math.random() > 0.5 ? 1 : -1
            )
          }}
        </li>
      </div>-->
      <div v-for="questions in quiz" :key="questions">
        <div v-for="(q, index) in questions" :key="q">
          <div v-show="index === quizIndex">
            <p>{{ q.question }}</p>
            <button v-for="m in q.answers" :key="m">
              {{ m }}
            </button>
            <!-- The two navigation buttons -->
            <!-- Note: prev is hidden on first question -->
            <button v-if="questionIndex > 0" v-on:click="prev">prev</button>
            <button v-on:click="next">next</button>
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
    };
  },
  methods: {
    //go to next page
    next() {
      this.quizIndex++;
    },
    prev() {
      this.quizIndex--;
    },
  },
};
</script>