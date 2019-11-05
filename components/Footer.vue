<template>
  <footer>
    <v-layout column>
      <v-container>
        <v-layout row>
          <v-layout wrap>
            <v-flex md3 mr-3 xs12 class="mobile-no-padding">
              <h1 class="footer-header">Date de contact:</h1>
              <p>
                Telefon:
                <a href="tel:0727.846.603">0727.846.603</a>
              </p>
              <p>
                E-mail:
                <a href="mailto:raul.zanc@yahoo.com">raul.zanc@yahoo.com</a>
              </p>
            </v-flex>
            <v-flex md4 mr-4 xs12 class="mobile-no-padding">
              <h1 class="footer-header">Adrese:</h1>
              <p>
                Sediul social:
                <span>Mun. Dej, str. Unirii nr.21</span>
              </p>
              <p>
                Punct de lucru:
                <span>Mun. Cluj Napoca, aleea Clabucet nr.3</span>
              </p>
            </v-flex>
            <v-flex class="footer-image" md2>
              <v-img :src="anre" max-width="80" max-height="70" />
              <p style="padding-top: 8px;">Atestat ANRE</p>
              <p>Atestat B, Atestat C1A</p>
            </v-flex>
            <v-flex class="footer-image" md1>
              <v-img :src="iso" max-width="70" max-height="70" />
              <p style="padding-top: 8px;">
                Certificat
                <br />ISO 9001
              </p>
            </v-flex>
            <v-flex class="footer-image" md1>
              <a href="https://www.facebook.com/Energy-Branching-Solutions-2289881701064037/">
                <v-img :src="fb" max-width="70" max-height="70" />
              </a>
            </v-flex>
          </v-layout>
        </v-layout>
        <!-- <v-layout row justify-end>
        <v-flex class="atestat">
          <p>Atestat ANRE, Atestat B, Atestat C1A</p>
        </v-flex>
        </v-layout>-->
      </v-container>
      <v-layout class="bottom-footer" row align-center pb-4 justify-center>
        <p class="px-2">&copy; Energy branching solutions</p>
        <router-link to="/politica" class="px-2">Politica de confidentialitate</router-link>
      </v-layout>
    </v-layout>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    anre: require("../assets/anre.png"),
    iso: require("../assets/iso.png"),
    fb: require("../assets/fb.png")
  })
};
</script>
<style lang="scss" scoped>
@import "../scss/variables/_colors.scss";
@import "../scss/mixins/_mixins.scss";
.footer-header {
  color: #000;
  padding-top: 20px;
}

.footer-image {
  a {
    display: block;
  }
  .v-image {
    margin-left: auto;
    margin-right: auto;
  }
  p {
    font-size: 14px;
    text-align: center;
  }
}
h1 {
  @include mobile-only {
    padding-top: 20px;
  }
}
.atestat {
  margin-top: 10px;
  p {
    text-align: right;
    @include mobile-only {
      text-align: center;
    }
  }
}
// .mobile-no-padding {
//   @include mobile-only {
//     margin-right: 0 !important;
//     margin-left: 0 !important;
//   }
// }
.footer-image .v-image {
  @include mobile-only {
    justify-content: center;
    margin: 0 auto;
    align-content: center;
  }
}
</style>