
<template>
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
            <option v-for="category in categories" :key="category.id">
              {{ category.name }}
            </option>
          </select></label
        >
      </div>

      <label class="custom-select" for="num-of-questions">
        <input
          id="num-of-questions"
          placeholder="Number of questions"
          min="1"
          max="50"
          type="number"
          v-model.number="numberOfQuestions"
        />
      </label>
      <button>Start Game</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "StartGame",
  data() {
    return {
      questions: null,
      categories: [],
      category: "",
      difficulty: "",
      numberOfQuestions: null,
      isClicked: false,
    };
  },

  async created() {
    await this.getCategories();
  },

  methods: {
    /**
     * Fetch all different categories.
     */
    async getCategories() {
      const resp = await fetch("https://opentdb.com/api_category.php");
      const data = await resp.json();
      this.categories = data.trivia_categories;
    },

    onSubmit() {
      if (
        this.category == "" ||
        this.difficulty === "" ||
        this.numberOfQuestions === null
      ) {
        return alert("The query is incomplete. Please fill out every field.");
      }
      if (this.isClicked) {
        return alert("The data is already fetched!");
      }

      this.fetchQuestions();

      this.isClicked = true;
      //clear out data
      this.category = "";
      this.difficulty = "";
      this.numberOfQuestions = null;
    },

    /**
     * * Fetch questions based on criteria (category, level and limit).
     */
    async fetchQuestions() {
      let level = this.getLevel().toLowerCase();
      let limit = this.numberOfQuestions;
      let categoryId;
      this.categories.forEach((cate) => {
        if (this.category === cate.name) {
          //console.log(cate.id)
          categoryId = cate.id;
        }
      });
      const resp = await fetch(
        `https://opentdb.com/api.php?amount=${limit}&category=${categoryId}&difficulty=${level}`
      );
      let jsonResponse = await resp.json();
      // manipulate questions
      let data = jsonResponse.results.map((question) => {
        // put answers on question into single array and shuffle correct_answer
        question.answers = [
          question.correct_answer,
          ...question.incorrect_answers,
        ].sort(() => (Math.random() > 0.5 ? 1 : -1));
        return question;
      });
      // put data on questions property
      this.questions = data;
      //data display
      let dataquestions = this.questions;
      this.$emit("questions-submitted", dataquestions);

      console.log("modified questions", this.questions);
    },
    getLevel() {
      return this.difficulty;
    },
  },
};
</script>
<style scoped>
select,
input {
  padding: 12px;
  width: 14rem;
  background-color: #f8f8ec;
  border: none;
  font-size: 15px;
}

.form-wrapper {
  width: 60rem;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 10rem;
}
</style>
