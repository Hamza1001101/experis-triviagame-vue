<template>
  <div class="container">
    <nav class="nav">
      <ul class="logo">
        <li>
          <a href="#"> TriviaApp</a>
        </li>
      </ul>
      <ul class="navbar">
        <li>
          <a href="#">Start</a>
        </li>
        <li>
          <a href="#">Questions</a>
        </li>
        <li>
          <a href="#">Results</a>
        </li>
      </ul>
    </nav>

    <div>
      <form class="form-wrapper" @submit.prevent="onSubmit">
        <div class="difficulty">
          <label class="custom-select" for="difficulty">
            <select id="difficulty" name="options" v-model="difficulty">
              <option value="">Select Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select></label
          >
        </div>
        <div class="category">
          <label class="custom-select" for="category">
            <select id="category" v-model="category">
              <option value="">Select Category</option>
              <option
                v-for="category in categories"
                :key="category.id"
            >
              
                {{ category.name}}
              </option>
            </select></label
          >
        </div>

        <!--<div class="num-of-questions">
          <label class="custom-select" for="num-of-questions">
            <select id="num-of-questions" name="options" v-model.number="numberOfQuestions">
              <option value="">Select number of Questions</option>
              <option >1</option>
              <option >3</option>
              <option >2</option>
            </select></label
          >
        </div>-->
        <label class="custom-select" for="num-of-questions">
          <input
            id="num-of-questions"
            placeholder="Number of questions"
            min="1"
            type="number"
            v-model.number="numberOfQuestions"
          />
        </label>
        <button>Start Game</button>
      </form>

    </div>

  </div>
</template>

<script>
export default {
    name: 'StartGame',
    data() {
        return {
            questions: [],
            categories: [],
            category: '',
            difficulty: '',
            numberOfQuestions: null
        }
    },
    created() {
        this.getQuestions()
    },
    methods: {
        async getQuestions() {
            const resp = await fetch('https://opentdb.com/api_category.php')
            //const resp = await fetch(`'https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.category}&difficulty=${this.difficulty}'`)
            const data = await resp.json()
            this.categories = data.trivia_categories

            console.log(this.categories)
        },
          onSubmit() {
              if(this.category == '' || this.difficulty=== '' || this.numberOfQuestions=== null) {
                 return alert('The query is incomplete. Please fill out every field.')
              }
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
    },



}
</script>
<style scoped>
.container {
  padding: 4rem;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.logo {
  padding-left: 0;
}
.navbar {
  width: 20vw;
  display: flex;
  justify-content: space-between;
}
.logo > li > a {
  color: #a31621;
  font-weight: bold;
}
.navbar > li > a {
  color: #738290;
  font-weight: bold;
}
.navbar > li > a:hover {
  color: #f02d3a;
}

/*********Form ********** */

select,
input {
  padding: 12px;
  width: 14rem;
  background-color: #cedada;
  border: none;
}

.form-wrapper {
  width: 60rem;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 10rem;
}

button {
  cursor: pointer;
  display: inline-block;
  background: #73eedc;
  color: #333;
  border: 0;
  padding: 12px;
  width: 11rem;
}
button:focus {
  outline: none;
}
button:hover {
  transform: scale(0.98);
}
</style>
