<template>
  <div>
    <h3>About page</h3>
    <ul>
      <li v-for="d in data" :key="d">{{ d }}</li>
    </ul>
    {{ questions }}
  </div>
</template>
<script>
export default {
  name: "QuestionsPage",
  props: ["data"],
  data() {
    return {
      questions: null,
    };
  },
  mounted() {
    console.log("data coming from the router", this.data);
  },
};
</script>
<style lang="">
</style>