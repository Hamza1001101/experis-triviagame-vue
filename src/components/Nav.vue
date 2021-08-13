<template>
  <div>
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
  </div>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style scoped>
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
  color: #e55812;
  font-weight: bold;
}
.navbar > li > a {
  color: #738290;
  font-weight: bold;
}
.navbar > li > a:hover {
  color: #e55812;
}
.logo > li > a:hover {
  color: #738290;
}
</style>