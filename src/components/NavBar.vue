<template>
  <div class="navbar">
    <div v-for="(icon, index) in icons" :key="index" class="nav-icon">
        <a :title="icon.title"> <i :class="icon.iconClass" @click="pushToPage(icon.name)"></i> </a>
    </div>
    <div class="nav-icon">
        <a title = "Contact Me" href="mailto:jhardybuis@gmail.com?subject=Looking to Connect!"><i class="fa-solid fa-envelope"></i></a>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      icons: [
        {name: 'home', iconClass: 'fa-solid fa-house', title: 'Home'},
        {name: 'about', iconClass: 'fa-solid fa-user', title: 'About Me'},
        {name: 'projects', iconClass: 'fa fa-briefcase', title: 'Projects'}
      ]
    }
  },
  methods: {
    pushToPage(pageName){
      this.$router.push( {name: pageName} )
    }
  }
}

</script>

<style scoped>

.navbar{
  border-style: solid;
  border-width: 2px;
  border-color: #2f3a46;
  background-color: #292929;
  border-radius: 50px;
  min-height: 50px;
  width: auto;
  min-width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
}

.nav-icon{
  font-size: 1rem;
}

.nav-icon a{
  color: white;
}

.nav-icon:hover{
  transform: scale(1.2);
  cursor: pointer;
}

</style>
