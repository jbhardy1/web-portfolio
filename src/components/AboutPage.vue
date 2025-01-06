<template>
  <div class="about-me">
    <nav-bar class="nav-bar"/>
    <h1>About me</h1>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default{
  data() {
    return{

    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>

* {
  color: rgb(206, 203, 203);
  font-family: Arial, Helvetica, sans-serif;
}

.about-me{
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 20px;
}

.nav-bar {
  grid-column: span 2;
  align-self: center;
  justify-self: center;
  position: sticky;
  top: 20px;
  z-index: 10;
  margin-top: 40px;
}

</style>
