<template>
    <div>questions
      <div v-bind="index">
        <span v-html="questions.results[index].question"></span>
      </div>
      <div v-if="questions.results[index].type ==='multiple'">
      <button id="0" @click="getNextQuestion($event)" v-html="questionsArr[0]"></button>
      <button id="1" @click="getNextQuestion($event)" v-html="questionsArr[1]"></button>
      <button id="2" @click="getNextQuestion($event)" v-html="questionsArr[2]"></button>
      <button id="3" @click="getNextQuestion($event)" v-html="questionsArr[3]"></button>
      </div>
      <div v-else>
        <button id="true" @click="getNextQuestion($event)">TRUE</button>
        <button id="false" @click="getNextQuestion($event)">FALSE</button>
      </div>
    </div>

</template>
<script>
export default {
  name: 'Question',
  props:{
    attributesQuiz: [Object, Array]
  },
  data(){
    return{
      index:0,
      questions:{},
      answeredQuestions:[],
      urlAPI:'https://opentdb.com/api.php',
      questionsArr:[]
      
    }
  },
  created() {
   this.urlAPI += '?amount=' + this.attributesQuiz.amount;
   if(this.attributesQuiz.difficulty !== -1){
     this.urlAPI += '&difficulty=' + this.attributesQuiz.difficulty;
   }
   if(this.attributesQuiz.category !== -1){
     this.urlAPI += '&category='+this.attributesQuiz.category;
   }


    fetch(this.urlAPI)
        .then(response => response.json())
        .then(data => this.questions = data)
        .then(data => {
            if(data.response_code ===1){
              alert("Error");
                this.$router.go(-1)
            }else this.addAnswersToQuestionArray();
        })
        .catch((error) => {
          console.log(error)
        });
  },
  /**
   * method to send user to results page
   */
  watch:{
    index(){
      if(this.index === this.attributesQuiz.amount){
        alert("Qompleted! :)")
        this.$router.push({name: 'Result', params:{answeredQuestions: this.answeredQuestions, attributesQuiz: this.attributesQuiz, questions: this.questions}})
      }
    }
  },
  methods:{
    /**
     * String to HTML
     */
    decodeHtml: function (html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    },
    /**
     * gets next question after submit
     */
    getNextQuestion: function(e){
      
      console.log(e.target)
      this.submitAnswers(e.target.innerHTML)
      this.questions.results[this.index].correct_answer = this.decodeHtml(this.questions.results[this.index].correct_answer);
      this.index ++
      this.addAnswersToQuestionArray();
      console.log(e.target.id)
    },

    /**
     * shuffles questions
     */
    shuffleQuestions() {
      for (let i = this.questionsArr.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = this.questionsArr[i];
        this.$set(this.questionsArr, i, this.questionsArr[randomIndex]);
        this.$set(this.questionsArr, randomIndex, temp);
      }
    },

    /**
     * add answers to array
     */
    submitAnswers: function(value){
        this.answeredQuestions.push(value)
    },
    /**
     * adds answers of question to questionarr
     */
    addAnswersToQuestionArray(){
      if(this.questions.results[this.index].type === 'multiple'){
        let answers = [...this.questions.results[this.index].incorrect_answers, this.questions.results[this.index].correct_answer];
        this.questionsArr = answers;
        this.shuffleQuestions();
      }
    }

    
  }
}
</script>