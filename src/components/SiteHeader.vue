<template>
    <nav class="navbar">
      <ul class="nav-links">
        <li v-for="(link, index) in links" :key="index" class="link-icons">
        <i :class="link.iconClass" alt=link.alt @click="pushToPage(link.name)"></i>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  data(){
    return{
      links: [
        {name: "home", iconClass: "fa fa-home", title: "Home"},
        {name: "about", iconClass: "fa fa-id-badge", title: "About me"},
        {name: "projects", iconClass: "fa fa-briefcase", title: "My Projects"}
      ]
    }
  },
  methods: {
    pushToPage(pageName){
      this.$router.push({name: pageName})
    }
  }
}
</script>

<style scoped>

.nav-links {
  display: flex;
  list-style: none;
  padding: 0;
}

.nav-links li {
  margin: 0 20px;
}

.nav-links a {
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-links a:hover {
  background-color: #5da6f4;
  color: #222;
}

</style>
