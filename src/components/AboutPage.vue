<template>
  <div class="about-me fade-in">
    <nav-bar class="nav-bar" />

    <div class="content-wrapper">
      <div class="basic-info">
        <img class="headshot" src="https://res.cloudinary.com/dwdijh29x/image/upload/v1736788525/headshot_kkldun.jpg" alt="headshot" />
        <h2>Joshua Hardy</h2>
        <h4>Full-Stack Developer</h4>
      </div>

      <div class="about-education-experience">
        <div class="tabs">
          <button class="tab-button" :class="{ active: activeTab === 'about' }" @click.prevent="changeTab('about')">
            About Me
          </button>
          <button class="tab-button" :class="{ active: activeTab === 'education' }" @click.prevent="changeTab('education')">
            Education
          </button>
        </div>
        <div class="tab-content" v-if="activeTab === 'about'">
          <div class="about-section">
            <h3>About Me</h3>
            <p>
              I am a dedicated software developer with a strong foundation in Java, SQL, and Vue.js, currently pursuing a Bachelor of Science in Computer Science at the University of Cincinnati.
              As a U.S. Marine Corps veteran and a graduate of Tech Elevator’s full-stack development bootcamp, I bring a unique blend of discipline, problem-solving skills, and technical expertise to every project.
            </p>
          </div>
          <div class="goals-section">
            <h3>Current Goals</h3>
            <ul>
              <li>Find my first Software Development Job.</li>
              <li>Expand expertise in cloud computing and AI/ML technologies.</li>
                <ul class="sub-list">
                  <li>Currently, I'm studying for my AWS CLF-CO2 exam and expect to test out for my certification on Feb. 2nd.</li>
                </ul>
              <li>Complete my Bachelor of Science in Computer Science by 2027.</li>
              <li>Contribute to open-source projects that focus on community impact.</li>
                <ul class="sub-list">
                  <li>I recently commited to learning WordPress to assist in the overhaul of the web presence of
                    <a href="https://called2grow.org/" rel="noopener noreferrer" target="_blank">Called2Grow</a>
                    , a non-proffit organization focused on assisting families in overcoming substance abuse and addiction.</li>
                </ul>
            </ul>
          </div>
          <div class="hobbies-section">
            <h3>Hobbies and Interests</h3>
            <p>
              Outside of programming, I enjoy:
            </p>
            <ul>
              <li>Reading, mostly fiction but I also enjoy reading about new technologies/coding languages.</li>
              <li>3D Printing, I'm an avid hobbiest and print a plethora of unique things with my FDM and Resin Printers.</li>
              <li>Dungeons and Dragons. I enjoy having a creative outlet to unwind and socialize with friends and strangers - there's nothing better than D&D!</li>
              <li>Playing strategy games and solving puzzles to unwind. I'm a huge fan of CRPG's and Simulation games such as Baldur's Gate and Civ IV. I'm also (basically) a wordle champ.</li>
            </ul>
          </div>
        </div>
        <div class="tab-content" v-if="activeTab === 'education'">
          <div class="ed-institutes" v-for="(education, index) in education" :key="index">
            <ul>
              <li class="logo-name">
                <img :src="education.logo" class="edu-logo" /> {{ education.school }}
              </li>
              <p class="date"> Dates attended: {{ education.attended }}</p>
              <ul>
                <li><strong>Focus: </strong> {{ education.focus }}</li>
                <li><strong>Description: </strong>{{ education.description }}</li>
              </ul>
              <strong class="skills"> Skills: {{ education.skills }}</strong>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  data() {
    return {
      activeTab: "about",
      education: [
        { logo: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737129471/uc_uozokm.webp', school: 'University of Cincinnati', attended: 'Jan \'25 - Present', focus: 'B.S in Computer Science', description: 'Currently attending, pursuing a B.S in Computer Science.', skills: "Binary, AWS, Cloud Computing, IT, Mathematics" },
        { logo: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737129677/techElogo_nbwiy1-removebg-preview_kvgen9.png', school: 'Tech Elevator', attended: 'Sept \'24 - Dec \'24', focus: 'Certificate in Full-Stack Development', description: 'A Full-stack bootcamp designing software systems and solutions with 800+ hours of education and application.', skills: 'OOP, Java, HTML, CSS, JavaScript, Spring Boot, Vue.js, SQL, PostgreSQL, JUnit, Git, Agile.' },
        { logo: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737122601/snhu_logo_jbyuji.webp', school: 'Southern New Hampshire University', attended: 'May \'22 - May \'24', focus: 'B.S in Computer Science', description: 'Attended SNHU while serving Active Duty through utilizaiton of Tuition Assistance, accruing 53 credits towards completion of my B.S.', skills: 'Python, C++, SDLC, SCRUM, Waterfall, Agile' },
        { logo: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737122601/olemisslogo_cs7i9t.png', school: 'University of Mississippi', attended: 'Aug \'19 - Aug \'20', focus: 'B.S in Computer Science', description: 'Began my B.S in Computer Science, accruing 27 credits towards completion before enlisting in the United States Marine Corps.', skills: 'Java, Public Speaking, Public Relations, Networking, IT Solutions' }
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

ul {
  margin-top: 5px;
  margin-bottom: 5px;
}

.nav-bar {
  grid-column: span 2;
  align-self: center;
  justify-self: center;
  position: sticky;
  top: 20px;
  z-index: 10;
  margin-top: 20px;
  color: rgb(206, 203, 203);
}

.about-me {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
}

.basic-info {
  width: 40%;
  text-align: center;
  padding: 20px;
  margin-right: 20px;
  color: whitesmoke;
}

.headshot {
  width: 50%;
  border-radius: 50%;
  margin-bottom: 20px;
}

.about-education-experience {
  width: 60%;
  padding: 15px;
  background-color: whitesmoke;
  border-radius: 15px;
  margin-right: 30px;
  min-height: 70%;
}

.tabs {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.tab-button {
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  color: black;
}

.tab-button.active {
  background-color: #d0d0d0;
  font-weight: bold;
}

.tab-content {
  height: 75vh;
  color: black;
  overflow: auto;
  padding-right: 5px;
}

.about-section,
.goals-section,
.hobbies-section {
  margin-bottom: 20px;
}

.about-section h3,
.goals-section h3,
.hobbies-section h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1.25rem;
}

.goals-section ul,
.hobbies-section ul {
  padding-left: 20px;
}

.hobbies-section p,
.goals-section p {
  margin-bottom: 10px;
}

.hobbies-section li,
.goals-section li {
  margin-bottom: 10px;
}

.sub-list {
  list-style: square;
}

.ed-institutes {
  border: 1px solid #ccc;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 10px;
}

.logo-name {
  display: flex;
  text-align: center;
  align-items: center;
  gap: 15px;
}

.edu-logo {
  width: 50px;
  height: 50px;
}

.date {
  font-style: italic;
  font-size: small;
}

.skills {
  font-size: small;
  font-style: italic;
}

.fade-in {
  animation: fadeIn 1.5s ease-out forwards;
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
    height: 100%;
    margin-top: 40px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .about-me {
    height: 100%;
  }

  .content-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .basic-info {
    width: 100%;
  }

  .about-education-experience {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
