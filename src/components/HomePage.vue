<template>
  <div class="home-page">
    <span class="intro fade-in">
      <h1 class="dev-name">Hi, I'm Joshua</h1>
      <h3 class="title">A Full-Stack Developer</h3>
      <p class="summary">Utilizing Java, JavaScript, and Vue.Js to build full-stack applications.</p>
      <div v-for="(link, index) in links" :key="index" class="link-icons">
        <i :class="link.iconClass" alt=link.alt></i>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { name: "Vue.js", iconClass: "fab fa-vuejs", animationClass: "bounce" },
        { name: "Java", iconClass: "fab fa-java", animationClass: "pulse" },
        { name: "JavaScript", iconClass: "fab fa-js", animationClass: "flip" },
        { name: "HTML", iconClass: "fab fa-html5", animationClass: "shake" },
        { name: "CSS", iconClass: "fab fa-css3-alt", animationClass: "zoom" },
        { name: "RESTful API", iconClass: "fas fa-plug", animationClass: "spin" },
        { name: "PostgreSQL", iconClass: "fas fa-database", animationClass: "rotate" },
        { name: "PGAdmin", iconClass: "fas fa-cogs", animationClass: "pulse" },
      ],
      images: [
        { name: "HomePage", url: "https://res.cloudinary.com/dwdijh29x/image/upload/v1735373728/sprout_home_ozr7a1.png" },
        { name: "Search", url: "https://res.cloudinary.com/dwdijh29x/image/upload/v1735373728/sprout_search_tauww7.png" },
        { name: "Details", url: "https://res.cloudinary.com/dwdijh29x/image/upload/v1735373728/sprout_details1_hwjb64.png" },
        { name: "Garden", url: "https://res.cloudinary.com/dwdijh29x/image/upload/v1735373728/sprout_garden_gaia_qdx27w.png" }
      ],
      links: [
        {name: "GitHub", iconClass: "fab fa-github", alt: "https://github.com/jbhardy1"},
        {name: "LinkedIn", iconClass: "fab fa-linkedin"},
        {name: "Email", iconClass: "fa fa-envelope"},
      ],
      currentIndex: 0,

    };
  },
};
</script>

<style scoped>

* {
  color: rgb(206, 203, 203);
  font-family: Arial, Helvetica, sans-serif;
}

.home-page{
  background-image: linear-gradient(to bottom right, #292929, #003049);
  height: 1rem;
  min-height: 100vh;
  display: flex;
  justify-content: left;
}

.intro{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20%;
  margin-right: 20%;
}

.dev-name{
  font-size: xx-large;
}

.title{
  font-size: x-large;
}

.summary{
  margin-bottom: 20px;
}

.link-icons {
  display: inline-block;
  gap: 15px;
}

.link-icons i {
  font-size: 2rem;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 10%;
  background-color: #003049;
  transition: transform 0.3s ease;
  margin-top: 5px;
  margin-right: 10px;
  box-shadow: 0 8px 16px rgba(134, 133, 133, 0.2);
}

.link-icons i:hover {
  transform: scale(1.2);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}

</style>
