<template>
  <div class="about-me fade-in">
    <nav-bar class="nav-bar" />

    <div class="basic-info">
      <img class="headshot" src="https://res.cloudinary.com/dwdijh29x/image/upload/v1736788525/headshot_kkldun.jpg" alt="headshot"/>
      <h2>Joshua Hardy</h2>
      <h4>Full-Stack Developer</h4>
    </div>

    <div class="about-education-experience">
      <div class="tabs">
        <button
        class="tab-button" :class="{active: activeTab === 'about'}"
        @click="changeTab('about')"
        > About Me
        </button>
        <button
          class="tab-button"
          :class="{ active: activeTab === 'education' }"
          @click="changeTab('education')"
        >
          Education
        </button>
        <button
          class="tab-button"
          :class="{ active: activeTab === 'experience' }"
          @click="changeTab('experience')"
        >
          Experience
        </button>
      </div>
      <div class="tab-content" v-if="activeTab === 'about'">
        <h3>About Me</h3>
        <p>I am a dedicated software developer with a strong foundation in Java, SQL, and Vue.js, currently pursuing a Bachelor of Science in Computer Science at the University of Cincinnati.
          As a U.S. Marine Corps veteran and graduate of Tech Elevator’s full-stack development bootcamp, I bring a unique blend of discipline, problem-solving skills, and technical expertise to every project.
          My experience includes building full-stack applications like Sprout and Flashcard Mania, where I focused on creating responsive user interfaces and scalable back-end systems.
          I thrive in collaborative, Agile environments and am passionate about developing innovative, user-focused solutions that deliver real-world impact.
          With a commitment to continuous learning, I’m always eager to expand my skill set and tackle new challenges in the ever-evolving tech landscape.</p>
      </div>
      <div class="tab-content" v-if="activeTab === 'education'">
        <h3>Education</h3>
        <div class="ed-institutes" v-for="(education, index) in education" :key="index">
        <ul>
          <img :src="education.logo" class="edu-logo"/>
          <li >{{ education.school }}</li>
          <p class="date">{{ education.attended }}</p>
          <ul>
            <li> {{ education.focus }} </li>
            <li> {{ education.description }} </li>
          </ul>
        </ul>
        </div>
      </div>
      <div class="tab-content" v-if="activeTab === 'experience'">
        <h3>Experience</h3>
        <p>Details about experience go here.</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  data() {
    return {
      activeTab: "about", // Default tab
      education: [
        {logo: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737122601/UC_logo_ejs3wy.jpg', school: 'University of Cincinnati', attended: 'Jan \'25 - Present', focus: 'B.S in Computer Science', description: 'Currently attending, pursuing a B.S in Computer Science.'},
        {logo: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737122601/techElogo_nbwiy1.png', school: 'Tech Elevator', attended: 'Sept \'24 - Dec \'24', focus: 'Certificate in Full-Stack Development', description: 'A Full-stack bootcamp designing software systems and solutions with 800+ hours of education and application.', skills: 'OOP, Java, HTML, CSS, JavaScript, Spring Boot, Vue.js, SQL, PostgreSQL, JUnit, Git, Agile.'},
        {logo: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737122601/snhu_logo_jbyuji.webp', school: 'Southern New Hampshire University', attended: 'May \'22 - May \'24', focus: 'B.S in Computer Science', description: 'Attend SNHU while serving Active Duty through utilizaiton of Tuition Assistance. Accrued 80 credits towards completion of my B.S.', skills: 'Python, C++, SDLC'},
        {logo: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737122601/olemisslogo_cs7i9t.png', school: 'University of Mississippi', attended: 'Aug \'19 - Aug \'20', focus: 'B.S in Computer Science', description: 'Began my B.S in Computer Science, accruing 27 credits towards completion before enlisting in the United States Marine Corps.', skills: 'Java, Public Speaking, Public Relations, Networking, IT Solutions'}
      ]
    };
  },
  components: {
    NavBar,
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style scoped>

* {
  font-family: Arial, Helvetica, sans-serif;
}

.about-me {
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 80vh;
  min-width: 50vw;
  gap: 20px;
  margin-bottom: 10px;
}

.nav-bar {
  grid-column: span 2;
  align-self: center;
  justify-self: center;
  position: sticky;
  top: 20px;
  z-index: 10;
  margin-top: 40px;
  color: white;
}

.basic-info{
  color: white;
}

.headshot{
  width: 10%;
  border-radius: 100px;
}


.about-education-experience {
  border-radius: 10px;
  width: 60%;
  height: 80vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: start;
  border-radius: 15px;
  background-color: white;
}

.tabs {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 5px;
}

.tab-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: fit-content;
  color: #000000;
}

.tab-button.active {
  background-color: #ffffff;
  color: #000;
  font-weight: bold;
}

.tab-content {
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 80vh;
  padding: 15px;
  color: rgb(0, 0, 0);
  overflow: auto;
}

.edu-logo{
  width: 50px;
  height: 50px;
}

h3 {
  font-size: xx-large;
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
}

.fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}

.date{
  font-style: italic;
  font-size: small;
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

@media screen and (max-width: 768px) {
  .nav-bar {
    width: 60%;
    margin-top: 40px;
    margin-bottom: 10px;
  }
}
</style>
