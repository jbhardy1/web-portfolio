<template>
  <header class="header">
    <nav class="navbar">
      <ul class="nav-links">
        <li><router-link v-bind:to="{ name : 'home'}">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: end;
  background-color: #222;
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  width: 100;
  z-index: 1000;
}


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
