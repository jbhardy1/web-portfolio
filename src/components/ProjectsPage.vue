<template>
  <div class="projects-page">
    <nav-bar class="nav-bar"/>
    <under-construction class="under-const"/>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import UnderConstruction from '@/components/UnderConstruction.vue'

export default{
  data(){
    return{

    }
  },
  components: {
        NavBar,
        UnderConstruction
      }
}

</script>

<style scoped>

* {
  color: rgb(206, 203, 203);
  font-family: Arial, Helvetica, sans-serif;
}

.projects-page{
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.nav-bar {
  align-self: center;
  justify-self: center;
  position: sticky;
  top: 20px;
  z-index: 10;
  margin-top: 40px;
}

.under-const {
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
}

</style>
