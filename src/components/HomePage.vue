<template>
  <div class="home-page">
    <nav-bar class="nav-bar fade-in" />
    <span class="intro fade-in">
      <h1 class="dev-name">Hi, I'm <strong class="first-name" @click="pushToAbout">Joshua</strong></h1>
      <h3 class="title">A Full-Stack Developer</h3>
      <p class="summary">Utilizing Java, JavaScript, and Vue.Js to build full-stack applications.</p>
      <div v-for="(link, index) in links" :key="index" class="link-icons">
        <a :href="link.url" :title="link.name" target="_blank" rel="noopener noreferrer">
          <i :class="link.iconClass"></i>
        </a>
      </div>
      <button class="learn-more-btn" @click.prevent="pushToAbout()">Explore</button>
    </span>

    <span class="tech-stack fade-in">
      <div class="stack-head">
        <i class="fa-solid fa-layer-group"></i>
        <p>Tech Stack</p>
      </div>
      <div class="tech-carousel">
        <div v-for="(icon, index) in icons" :key="index" class="tech-icon">
          <i :class="icon.iconClass"></i>
          <strong class="tech-name">{{ icon.name }}</strong>
        </div>
        <div v-for="(icon, index) in icons" :key="'duplicate-' + index" class="tech-icon">
          <i :class="icon.iconClass"></i>
          <strong class="tech-name">{{ icon.name }}</strong>
        </div>
      </div>
    </span>

  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  data() {
    return {
      icons: [
        { name: "Vue.js", iconClass: "fab fa-vuejs" },
        { name: "Java", iconClass: "fab fa-java" },
        { name: "JavaScript", iconClass: "fab fa-js" },
        { name: "HTML", iconClass: "fab fa-html5" },
        { name: "REST", iconClass: "fas fa-plug" },
        { name: "PostgreSQL", iconClass: "fas fa-database" },
        { name: "CSS", iconClass: "fab fa-css3-alt" },
        { name: "AWS", iconClass: "fa-brands fa-aws" },
      ],
      links: [
        { name: "GitHub", iconClass: "fab fa-github", url: "https://github.com/jbhardy1" },
        { name: "LinkedIn", iconClass: "fab fa-linkedin", url: "https://www.linkedin.com/in/jbhardy1/" },
        { name: "Full Resume/CV", iconClass: "fa fa-file-text", url: "https://read.cv/jbhardy1" }
      ],
    };
  },
  methods: {
    pushToAbout() {
      this.$router.push({ name: 'about' });
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
* {
  color: rgb(206, 203, 203);
  font-family: Arial, Helvetica, sans-serif;
}

.home-page {
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

.intro {
  grid-row: 2;
  grid-column: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  text-align: center;
}

.dev-name {
  font-size: xx-large;
}

.title {
  font-size: x-large;
}

.summary {
  margin-bottom: 20px;
}

.link-icons {
  display: inline-block;
  margin: 3px;
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
  cursor: pointer;
}


.learn-more-btn{
  font-size: 2rem;
  padding: 8px;
  border: 2px solid #fff;
  border-radius: 15px;
  background-color: #003049;
  transition: transform 0.3s ease;
  margin-top: 5px;
  margin-right: 10px;
  box-shadow: 0 8px 16px rgba(134, 133, 133, 0.2);
  margin-left: 5px;
}

.learn-more-btn:hover{
  transform: scale(1.1);
  cursor: pointer;
}

.tech-stack {
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  width: 80%;
  height: 35%;
  border-style: solid;
  border-radius: 20px;
  border-color: #2f3a46;
  box-shadow: 0 8px 16px rgba(134, 133, 133, 0.2);
  flex-wrap: nowrap;
  overflow: hidden;
  background-color: #292929;
  padding-bottom: 30px;
}

.stack-head {
  display: flex;
  align-items: center;
  height: 10%;
  margin-top: 20px;
  margin-right: auto;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-style: solid;
  border-width: 3px;
  border-color: #2f3a46;
  background-color: #132b38;
  border-radius: 20px;
  gap: 5px;
}

.tech-carousel {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  animation: scrollIcons 10s linear infinite;
}

.tech-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  font-size: 5rem;
}

.tech-icon i:hover {
  transform: scale(1.2);
}

.tech-name {
  font-size: 1rem;
  margin-top: 8px;
  text-align: center;
}

@keyframes scrollIcons {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-984px);
  }
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


@media screen and (max-width: 768px) {

  .home-page {
    display: flex;
    flex-direction: column;
  }

  .nav-bar {
    width: 60%;
    margin-top: 40px;
    margin-bottom: -60px;
  }

  .intro {
    width: 80%;
    border-style: solid;
    border-width: 3px;
    border-color: #2f3a46;
    background-color: #292929;
    border-radius: 20px;
    margin-bottom: -50px;
    padding: 20px;
  }

  .tech-stack {
    width: 90%;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
}
</style>
