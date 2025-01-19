<template>
  <div class="projects-page">
    <nav-bar class="nav-bar"/>
    <div class="main-container">

        <div class="tab-container">
          <div v-for="(project, index) in projects" :key="index">
            <button @click="selectProject(index)" class="tab-button">
              <img :src="project.icon" alt="project icon" class="project-icon"/>
              <span>{{ project.name }}</span>
            </button>
          </div>
        </div>

        <div class="project-info">
          <div v-if="selectedProject">
            <div class="image-scroll">
              <div class="image-container">
                <img
                  :src="selectedProject.images[selectedImageIndex]"
                  :alt="`Project Image ${selectedImageIndex + 1}`"
                  class="main-image"
                />
              </div>
              <div class="thumbnails">
                <img
                  v-for="(image, index) in selectedProject.images"
                  :key="index"
                  :src="image"
                  :alt="`Thumbnail Image ${index + 1}`"
                  class="thumbnail"
                  @click="changeImage(index)"
                />
              </div>
            </div>

            <ul>
              <li><strong>Description:</strong> {{ selectedProject.description }}</li>
              <li><strong>Stack:</strong> {{ selectedProject.stack }}</li>
              <li><strong>Repository:</strong> <a :href="selectedProject.repository" target="_blank" rel="noopener noreferrer">View Repository</a></li>
            </ul>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  data() {
    return {
      selectedImageIndex: 0,
      selectedProject: null,
      projects: [
        {
          name: 'Sprout',
          icon: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1733323940/sprout-icon-light_wvq61u.png',
          images: [
            'https://res.cloudinary.com/dwdijh29x/image/upload/v1735373728/sprout_home_ozr7a1.png',
            'https://res.cloudinary.com/dwdijh29x/image/upload/v1735373728/sprout_details1_hwjb64.png',
            'https://res.cloudinary.com/dwdijh29x/image/upload/v1735373728/sprout_garden_gaia_qdx27w.png'
          ],
          description: 'Sprout is a final capstone project developed during my time at Tech Elevator. The app helps individuals grow their own garden-to-table plants, promoting sustainability through easy-to-use features like garden management, plant growth tracking, and personalized gardening tips from GAIA. Powered by Google Gemini, GAIA can answer any plant-related queries, while the app’s interactive zoning map helps users identify optimal planting zones based on their location.',
          stack: 'Vue.JS, Java, Spring Boot, PostgreSQL, Google Gemini',
          repository: 'https://github.com/jbhardy1/SproutApp'
        }
      ]
    };
  },
  methods: {
    selectProject(index) {
      this.selectedProject = this.projects[index];
      this.selectedImageIndex = 0;
    },
    changeImage(index) {
      this.selectedImageIndex = index;
    }
  },
  mounted() {
    this.selectProject(0);
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
* {
  color: rgb(206, 203, 203);
  font-family: Arial, Helvetica, sans-serif;
}

.projects-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.nav-bar {
  align-self: center;
  justify-self: center;
  position: sticky;
  top: 20px;
  z-index: 10;
  margin-top: 40px;
  margin-bottom: 30px;
}

.main-container {
  display: flex;
  flex-direction: row;
  border-style: solid;
  border-radius: 15px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  height: 80%;
  width: 90%;
  background-color: #292929;
  border-color: #2f3a46;
  box-shadow: 0 8px 16px rgba(134, 133, 133, 0.2);
}

.tab-container {
  border-right: solid;
  border-color: #2f3a46;
  background-color: #252525;
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.tab-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #292929;
  color: #fff;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.3s ease;
}

.tab-button:hover {
  background-color: #3a474f;
}

.project-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.project-info {
  padding: 20px;
  flex-grow: 1;
}

.image-scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
}

.main-image {
  width: 100%;
  max-width: 700px;
  height: 70%;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.thumbnails {
  display: flex;
  gap: 10px;
}

.thumbnail {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.thumbnail:hover {
  transform: scale(1.1);
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 40px;
}

li {
  margin-bottom: 10px;
}

a {
  color: #4CAF50;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    width: 100%;
  }

  .tab-container {
    width: 100%;
    border-right: none;
  }
}
</style>
