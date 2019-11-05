<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container fluid class="pa-0">
        <router-view />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export default {
  name: "Layout",
  components: { Navigation, Footer }
};
</script>
<style lang="scss">
@import "../scss/base.scss";
</style>
