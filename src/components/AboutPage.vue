<template>
  <div class="about-me">
    <nav-bar class="nav-bar" />

    <div class="basic-info">
      <img class="headshot" src="https://res.cloudinary.com/dwdijh29x/image/upload/v1736788525/headshot_kkldun.jpg" alt="headshot"></img>
      <h2>Joshua Hardy</h2>
      <h3>Full-Stack Developer / Student</h3>
      <h4>Age: 24</h4>
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
        <p>Details about me go here</p>
      </div>
      <div class="tab-content" v-if="activeTab === 'education'">
        <h3>Education</h3>
        <p>Details about education go here.</p>
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
      activeTab: "education", // Default tab
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
  min-height: 100vh;
  min-width: 50vw;
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
  color: white;
}

.basic-info{
  color: white;
}

.headshot{
  width: 10%;
  border-radius: 50px;
}


.about-education-experience {
  background-color: #292929;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  height: 80vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: start;
}


.tabs {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.tab-button {
  background-color: #dbdbdb;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: fit-content;
  color: #000000;
}

.tab-button.active {
  background-color: #ffffff;
  color: #000;
  font-weight: bold;
}

.tab-content {
  background-color: white;
  height: 80vh;
  padding: 15px;
  border-radius: 5px;
  color: rgb(0, 0, 0);
}

h3 {
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
}

@media screen and (max-width: 768px) {
  .nav-bar {
    width: 60%;
    margin-top: 40px;
    margin-bottom: 10px;
  }
}
</style>
