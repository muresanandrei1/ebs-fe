<template>
  <div>
    <div class="home-bg__hero">
      <v-container class="hero__text">
        <h1>Energy Branching Solutions</h1>
      </v-container>
      <div class="overlay" />
    </div>
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About";

export default {
  name: "home",
  components: {
    About
  }
};
</script>
<style lang="scss" scoped>
@import "../scss/variables/_colors.scss";
.home-bg__hero {
  background-image: url("../assets/home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  width: 100%;
  display: flex;
  position: relative;
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
  }
}
.hero {
  &__text {
    text-transform: uppercase;
    z-index: 2;
    text-align: center;
    font-size: 45px;
    color: $white;
    // padding-bottom: 100px;
    p {
      text-transform: capitalize;
      font-size: 18px;
    }
  }
}
</style>
