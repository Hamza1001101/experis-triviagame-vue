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
export default {};
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
</style>