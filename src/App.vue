<template>
  <div id="portfolio">
    <site-header />
    <router-view class="body"/>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';

export default {
  components: {
    SiteHeader
  }
}

</script>

<style>
body {
  margin: 0px; /* Bypass default 8px margin */
}
</style>
