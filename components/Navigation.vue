<template>
  <div class="main-navigation">
    <v-container pa-2>
      <v-layout row justify-space-between>
        <v-flex md2>
          <router-link to="/">
            <img src="../assets/logo.png" width="140" height="90" />
          </router-link>
        </v-flex>
        <v-layout row justify-end align-center class="hidden-sm-and-down">
          <v-flex md5>
            <v-layout>
              <v-flex v-for="link in links" :key="link.name" px-1 class="menu-item">
                <router-link :to="link.route">{{link.name}}</router-link>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <div class="hidden-md-and-up">
          <v-toolbar-side-icon @click.stop="drawer = !drawer" />
          <v-navigation-drawer v-model="drawer" absolute temporary right>
            <v-list class="mobile-menu">
              <v-list-tile v-for="link in links" :key="link.name">
                <v-list-tile-content class="menu-item large pb-2">
                  <router-link :to="link.route">{{link.name}}</router-link>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    links: [
      {
        name: "Despre noi",
        route: "/"
      },
      {
        name: "Servicii",
        route: "/service"
      },
      {
        name: "Portofoliu",
        route: "/portofoliu"
      },
      {
        name: "Contact",
        route: "/contact"
      }
    ],
    drawer: null
  })
};
</script>
<style lang="scss" scoped>
@import "../scss/variables/_colors.scss";
.main-navigation {
  background: #fff;
}
.mobile-menu {
  padding: 24px;
}
.menu-item {
  &.large {
    flex: 0 0 100%;
  }
  font-size: 16px;
  text-transform: uppercase;
  // text-align: center;
  font-weight: 900;
  letter-spacing: 1px;
  a {
    color: $grey;
    &.nuxt-link-exact-active {
      color: $red;
    }
  }
}
</style>
