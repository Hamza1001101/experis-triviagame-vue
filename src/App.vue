<template>
  <div class="container">
    <div><router-link class="logo" to="/">TrivaApp</router-link></div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #eceeef;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
  cursor: pointer;
}
li {
  list-style-type: none;
}
.container {
  padding: 4rem;
}
.header {
  text-align: center;
  margin-top: 4rem;
}

button {
  cursor: pointer;
  display: inline-block;
  background: #e55812;
  color: #fff;
  font-size: 15px;
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
.logo {
  color: #e55812;
  font-weight: bold;
}
</style>
