<!-- Kommer flytta form-komponenten här sedan -->
<template>
  <form class="form-wrapper" @submit.prevent="onSubmit">
        <div class="difficulty">
          <label class="custom-select" for="difficulty">
            <select id="difficulty" name="options" v-model="difficulty">
              <option value="">Select Difficulty</option>
              <option >Easy</option>
              <option >Medium</option>
              <option >Hard</option>
            </select></label
          >
        </div>
        <div class="category">
          <label class="custom-select" for="category">
            <select id="category" name="options" v-model="category">
              <option value="">Select Category</option>
              <option >General Knowledge</option>
              <option >Film</option>
              <option >Entartainment</option>
            </select></label
          >
        </div>

     
         <label class="custom-select" for="num-of-questions">
        <input id="num-of-questions"
         placeholder="Number of questions" 
         min="1" 
         type="number" 
         v-model.number="numberOfQuestions">
         </label>
        <button>Start Game</button>
      </form>
</template>
<script>
export default {
    name: 'Form',
    data() {
      return {
        category: '',
            difficulty: '',
            numberOfQuestions: null 
      }
    },
    methods: {
       onSubmit() {
             let gameParams = {
             difficulty : this.difficulty,
             category: this.category,
             numberOfQuestions: this.numberOfQuestions

      }
      this.$emit('review-submitted', gameParams)

      this.category = ''
      this.difficulty = ''
      this.numberOfQuestions = null

        }
    }
}
</script>