<template>
<div>
<div>Test</div>
<Question style="width: 100%" :attributesQuiz="recievedData"></Question>

</div>
</template>

<script>
import Question from '../Questions.vue'
export default {
  name: "Quiz",
  components:{
        Question
        
    }, data(){
    return{
      recievedData: this.$route.params.data
    }
  },
}
</script>

<style scoped>
</style>