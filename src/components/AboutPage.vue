<template>
  <div class="about-me">
    <nav-bar class="nav-bar" />

    <div class="about-details">
      <h3>About Me</h3>
      <p>This is the details section about me.</p>
    </div>

    <div class="about-education-experience">
      <div class="tabs">
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
  color: rgb(206, 203, 203);
  font-family: Arial, Helvetica, sans-serif;
}

.about-me {
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

.about-details {
  background-color: red;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  margin: auto;
  height: auto;
}


.about-education-experience {
  background-color: green;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  height: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
}


.tabs {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  gap: 10px;
}

.tab-button {
  background-color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  color: #fff;
}

.tab-button.active {
  background-color: #ffffff;
  color: #000;
  font-weight: bold;
}

.tab-content {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: black;
}

h3 {
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
}
</style>
