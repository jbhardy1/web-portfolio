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
                  @click="expandImage"
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

    <div v-if="isImageExpanded" class="expanded-image-container" @click="closeExpandedImage">
      <img
        :src="selectedProject.images[selectedImageIndex]"
        :alt="`Expanded Image ${selectedImageIndex + 1}`"
        class="expanded-image"
      />
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
      isImageExpanded: false,
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
          stack: 'Vue.JS, Javascript, HTML, CSS, Java, Spring Boot, PostgreSQL, RESTful API, Google Gemini.',
          repository: 'https://github.com/jbhardy1/SproutApp'
        },
        {
          name: 'Tenmo',
          icon: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737129677/techElogo_nbwiy1-removebg-preview_kvgen9.png',
          images: [
            'https://res.cloudinary.com/dwdijh29x/image/upload/v1737269235/Tenmo_erd_vibduu.png',
            'https://res.cloudinary.com/dwdijh29x/image/upload/v1737269235/Register-Login_d53s20.png',
            'https://res.cloudinary.com/dwdijh29x/image/upload/v1737269235/Bal-Send_vo6ixl.png'
          ],
          description: 'Tenmo is a secure and user-friendly money transfer service designed to simplify digital transactions. Upon registration, users are granted a starting balance of $1000 TENMObucks, which they can use to send or request money from other registered users within the Tenmo network. With a focus on security, Tenmo ensures that all transactions are processed safely, providing users with peace of mind as they manage their finances. Whether you\'re sending money to a friend or requesting funds for a shared expense, Tenmo makes peer-to-peer payments fast, easy, and secure.',
          stack: 'Java, Spring Boot, PostgreSQL, JDBC, RESTful API.',
          repository: 'https://github.com/jbhardy1/M2CapstoneTE'
        },
        {
          name: 'WebPortfolio',
          icon: 'https://res.cloudinary.com/dwdijh29x/image/upload/v1737270197/JA-removebg-preview_ayqgs8.png',
          images : [
            'https://res.cloudinary.com/dwdijh29x/image/upload/v1737269952/Web-home_p9cvr9.png',
            'https://res.cloudinary.com/dwdijh29x/image/upload/v1737269952/Web-about_zbecal.png',
            'https://res.cloudinary.com/dwdijh29x/image/upload/v1737269952/Web-project_f9nazt.png'
          ],
          description: 'My web portfolio was created to showcase who I am, my skills, and the journey I’ve taken in my professional development. It houses detailed information about my education and experience, giving insight into my work and personal projects. The creation of this portfolio also provided me with a valuable learning experience, where I dove deeper into Cloud Computing with AWS, specifically CloudFront and Amplify. This allowed me to expand my knowledge of version control, CI/CD, and hosting applications, giving me hands-on expertise in cloud technologies and modern development practices',
          stack: 'Vue.js, Javascript, HTML, CSS, AWS.'
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
    },
    expandImage() {
      this.isImageExpanded = true;
    },
    closeExpandedImage() {
      this.isImageExpanded = false;
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
  border-radius: 15px;
  border-color: #2f3a46;
  background-color: #252525;
  min-width: 10%;
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
  padding: 15px;
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
  min-width: 100%;
  max-width: 700px;
  min-height: 70%;
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

.expanded-image-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.expanded-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
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
