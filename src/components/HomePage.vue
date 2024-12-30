<template>
  <div class="home-page">
    <section class="intro fade-in">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my journey as a full-stack developer and see the projects I've been working on!</p>
    </section>

    <section class="about-me fade-in">
      <div class="about-text-container">
        <div class="about-text">
          <h2>About Me</h2>
          <p>I'm a Junior Full-Stack Developer with a passion for creating innovative applications. I graduated from Tech Elevator's Full-Stack Bootcamp, focusing on SaaS development with Vue.js, Java, and SQL. Currently, I'm pursuing a B.S. in Computer Science at the University of Cincinnati and working towards my AWS Developer Certification.</p>
          <p>With a strong foundation in software development and a growing interest in cloud technologies, I am eager to contribute to projects that challenge my skills and grow my expertise in full-stack development.</p>
        </div>
      </div>
      <div class="icons-container">
        <div class="icon-row">
          <div v-for="(icon, index) in icons.slice(0, 4)" :key="index" class="icon" :class="icon.animationClass">
            <i :class="icon.iconClass"></i>
            <p>{{ icon.name }}</p>
          </div>
        </div>
        <div class="icon-row">
          <div v-for="(icon, index) in icons.slice(4, 8)" :key="index" class="icon" :class="icon.animationClass">
            <i :class="icon.iconClass"></i>
            <p>{{ icon.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects fade-in">
      <div class="project-container">
        <div class="project-image">
          <div class="image-wrapper">
            <transition name="image-slide" mode="out-in">
              <img :key="currentIndex" :src="images[currentIndex].url" :alt="images[currentIndex].name" class="carousel-image" />
            </transition>
          </div>
          <div class="thumbnails">
            <div v-for="(image, index) in images" :key="index" class="thumbnail" @click="currentIndex = index">
              <img :src="image.url" :alt="image.name" class="thumbnail-image" />
            </div>
          </div>
        </div>
        <div class="project-info">
          <div class="project-text-box">
            <h2>Current Projects</h2>
            <p><strong>Sprout</strong> - A full-stack web application built with Vue.js on the frontend, and Java + Spring Boot on the backend. Users can register, log in, and manage their garden with custom plant tracking. The app includes detailed plant information, search features, and even integrates with Google Gemini as GAIA – your garden assistant. This project demonstrates my ability to integrate multiple technologies and build dynamic user experiences.</p>
          </div>
        </div>
      </div>
    </section>
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
      currentIndex: 0,

    };
  },
};
</script>

<style scoped>
html, body {
  height: 100%;
  background-color: #121212;
  font-family: 'Roboto', sans-serif;
  color: white;
}

body {
  overflow-x: hidden;
}

.home-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.intro {
  background: #333;
  padding: 3rem;
  text-align: center;
  height: 45%;
}

.intro h1 {
  font-size: 2.5rem;
  color: #5da6f4;
}

.intro p {
  font-size: 1.2rem;
  color: #ddd;
}

.about-me {
  background: #444;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 45%;
}

.about-text-container {
  flex: 1;
  max-width: 50%;
  padding-right: 2rem;
  background-color: #333;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.about-text {
  margin: 0;
}

.about-me h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.icons-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2rem;
}

.icon-row {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 50px;
  margin-right: 1rem;
}

.icon i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #5da6f4;
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon p {
  font-size: 1rem;
  color: #ddd;
}

.icon:hover i {
  transform: scale(1.2);
  color: #457ab2;
}

.bounce i {
  animation: bounce 2s infinite;
}

.pulse i {
  animation: pulse 1.5s infinite;
}

.flip i {
  animation: flip 1.5s infinite;
}

.shake i {
  animation: shake 1s infinite;
}

.zoom i {
  animation: zoom 1.5s infinite;
}

.spin i {
  animation: spin 2s infinite linear;
}

.rotate i {
  animation: rotate 3s infinite linear;
}

.projects {
  background: #555;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45%;
}

.project-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}


.project-image {
  flex: 1;
  position: relative;
  width: 100%;
  max-width: 500px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  border-radius: 15px;
  height: auto;
  transition: opacity 0.5s ease-in-out;
}

.thumbnails {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

}

.thumbnail {
  margin: 0 0.5rem;
  cursor: pointer;
}

.thumbnail-image {
  width: 80px;
  height: auto;
  transition: transform 0.3s ease;
  border-radius: 5px;
}

.thumbnail-image:hover {
  transform: scale(1.1);
}

.project-info {
  flex: 1;
  padding: 1rem;
}

.project-text-box {
  background-color: #333;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.project-text-box h2{
  text-align: end;
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

@keyframes imageSlide {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.image-slide {
  animation: imageSlide 0.5s ease-out;
}
</style>
