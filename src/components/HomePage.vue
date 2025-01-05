<template>
  <div class="home-page">
    <span class="intro fade-in">
      <h1 class="dev-name">Hi, I'm <strong class="first-name" @click="pushToAbout">Joshua</strong></h1>
      <h3 class="title">A Full-Stack Developer</h3>
      <p class="summary">Utilizing Java, JavaScript, and Vue.Js to build full-stack applications.</p>
      <div v-for="(link, index) in links" :key="index" class="link-icons">
        <a :href="link.url" :title="link.name" target="_blank" rel="noopener noreferrer">
          <i :class="link.iconClass"></i>
        </a>
      </div>
    </span>

    <span class="tech-stack fade-in">
      <div class="tech-carousel">
        <div v-for="(icon, index) in icons" :key="index" class="tech-icon">
          <i :class="icon.iconClass"></i>
          <strong class="tech-name">{{ icon.name }}</strong>
        </div>
        <div v-for="(icon, index) in icons" :key=" 'duplicate-' + index" class="tech-icon">
          <i :class="icon.iconClass"></i>
          <strong class="tech-name">{{ icon.name }}</strong>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { name: "Vue.js", iconClass: "fab fa-vuejs" },
        { name: "Java", iconClass: "fab fa-java" },
        { name: "JavaScript", iconClass: "fab fa-js" },
        { name: "HTML", iconClass: "fab fa-html5" },
        { name: "CSS", iconClass: "fab fa-css3-alt" },
        { name: "REST", iconClass: "fas fa-plug" },
        { name: "PostgreSQL", iconClass: "fas fa-database" },
        { name: "PGAdmin", iconClass: "fas fa-cogs" },
      ],
      links: [
        {name: "GitHub", iconClass: "fab fa-github", url: "https://github.com/jbhardy1"},
        {name: "LinkedIn", iconClass: "fab fa-linkedin", url: "https://www.linkedin.com/in/jbhardy1/"},
        {name: "Contact Me", iconClass: "fa fa-envelope"},
      ],
      currentIndex: 0,
    };
  },
  methods: {
    pushToAbout() {
      this.$router.push({ name: 'about' });
    }
  }
};
</script>

<style scoped>
* {
  color: rgb(206, 203, 203);
  font-family: Arial, Helvetica, sans-serif;
}

.home-page {
  background-image: linear-gradient(to bottom right, #292929, #003049);
  height: 1rem;
  min-height: 100vh;
  display: flex;
  justify-content: left;
}

.intro {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15%;
  margin-right: 20%;
}

.dev-name {
  font-size: xx-large;
}

.first-name {
  text-decoration: underline;
}

.first-name:hover {
  cursor: pointer;
  color: whitesmoke;
}

.title {
  font-size: x-large;
}

.summary {
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
  cursor: pointer;
}

.tech-stack {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 45%;
  height: 33%;
  border-style: solid;
  border-radius: 20px;
  border-color: #292929;
  box-shadow: 0 8px 16px rgba(134, 133, 133, 0.2);
  margin-right: 10%;
  flex-wrap: nowrap;
  overflow: hidden;
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

.tech-icon i:hover{
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
</style>
