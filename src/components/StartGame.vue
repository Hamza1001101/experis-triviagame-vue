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

            <form class="form-wrapper" action="#"> 

<div class="difficulty">
    
              <label class="custom-select" for="styledSelect1">
  <select id="styledSelect1" name="options">
    <option value="">Select Difficulty</option>
    <option value="1">Easy</option>
    <option value="2">Medium</option>
    <option value="3">Hard</option>

  </select></label>
</div>
         <div class="category">
               <label class="custom-select" for="styledSelect1">
  <select id="styledSelect1" name="options">
    <option value="">Select Category</option>
    <option value="1">Easy</option>
    <option value="2">Medium</option>
    <option value="3">Hard</option>

  </select></label>

         </div>
            

          <div class="num-of-questions">

            <label class="custom-select" for="styledSelect1">
  <select id="styledSelect1" name="options">
    <option value="">Select number of Questions</option>
    <option value="1">Easy</option>
    <option value="2">Medium</option>
    <option value="3">Hard</option>

  </select></label>
          </div>


               
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
            questions: []
        }
    },
    created() {
        this.getQuestions()
    },
    methods: {
        async getQuestions() {
            const resp = await fetch('https://opentdb.com/api.php?amount=10&category=10&difficulty=medium')
            const data = await resp.json()
            this.questions = data.results
           
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
        color: #A31621;
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

   select {
    padding: 12px;
      width: 14rem;
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
    background:  #73EEDC;
    color: #333;
    border: 0;
    padding: 12px;
    width: 11rem;
}
button:focus {
    outline: none;
}
button:hover{
    transform: scale(0.98);
}
 
</style>