<template>
  <div>
    <v-container pt-3>
      <h2>Despre noi</h2>
      <v-divider color="white" />
    </v-container>
    <div class="white-bg">
      <v-container>
        <v-layout pt-2 wrap>
          <v-flex md12 xs-12>
            <p
              class="main-p"
            >In domeniul instalațiilor electrice SC Energy Branching Solutions SRL vine in fata dumneavoastra cu o echipa bine consolidata, alcatuita din profesionisti, gata oricand sa va stea la dispozitie cu toate sfaturile de care aveti nevoie. Va punem la dispozitie cunostiintele noastre accumulate, atat teoretice, cat si practice. Toate acestea pentru ca dumneavoastra sa puteti obtine un raport (calitate-eficienta)/cost cat mai mic, pentru orice lucrare ati avea de executat.</p>
          </v-flex>
        </v-layout>
        <v-layout row py-4 wrap>
          <v-flex md6 xs12 pr-3 class="no-padding">
            <v-img :src="img1" max-height="250" />
          </v-flex>
          <v-flex md6 xs12 pl-3 class="p-image no-padding">
            <p>Consultanța în domeniul instalațiilor electrice are ca obiectiv alegerea soluției optime din punct de vedere tehnic și economic, conforme cu cerințele și necesitățile clientului. Oferim consultanță cu privire la fezabilitatea unui proiect cu scopul de a identifica alternative viabile, oferindu-i clientului posibilitatea de a alege soluția optimă.</p>
          </v-flex>
        </v-layout>
        <v-layout row py-4 wrap>
          <v-flex md6 xs12 pr-3 class="p-image no-padding">
            <p>Firma SC Energy Branching Solutions SRL oferă servicii de consultanță atât pentru realizarea unor instalații electrice noi cât și pentru modernizarea și reabilitarea instalațiilor existente pentru reducerea consumului de energie, creșterea productivității sau scăderea costurilor de exploatare.</p>
          </v-flex>
          <v-flex md6 xs12 pl-3 class="no-padding">
            <v-img :src="img2" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    img1: require("../assets/contact.jpg"),
    img2: require("../assets/pictures/home2.jpg")
  })
};
</script>

<style lang="scss" scoped>
@import "../scss/variables/_colors.scss";
@import "../scss/mixins/_mixins.scss";
.no-padding {
  @include mobile-only {
    padding: 0 !important;
  }
}
h2 {
  padding-bottom: 8px;
}
p {
  margin-bottom: 0;
  // padding: 24px 0;
  color: $second-text-color;
  font-size: 18px;
  // letter-spacing: 1px;
  text-align: justify;
}
.p-image {
  align-self: center;
}
.white-bg {
  background-color: white;
}
</style>