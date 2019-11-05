<template>
  <div>
    <div class="home-bg__hero">
      <v-container class="hero__text">
        <h1>Lucrari instalatii electrice de referinta</h1>
      </v-container>
      <div class="overlay" />
    </div>
    <div class="white-bg">
      <v-container pt-3>
        <v-layout row py-4 wrap>
          <v-flex md6 pr-3 class="p-image no-padding" align-center>
            <ol>
              <li>Proiectare instalatii electrice interioare pentru Sindicatul Liber al Invatamantului Preuniversitar Clujean mun, Cluj Napoca, Piata Stefan cel Mare, jud. Cluj.</li>
              <li>Modernizare instalatii electrice interioare etaj 3 Central, mun, Cluj Napoca, str. Regele Ferdinand, jud. Cluj.</li>
              <li>Reabilitarea liceului Constantin Noica in vederea imbunatatirii eficientei energetice, mun. Sibiu, str. Ostirii, jud. Sibiu.</li>
              <li>Reabilitarea Scolii nr.1 Sibiu in in vederea imbunatatirii eficientei energetice, mun. Sibiu, str. Hategului, jud. Sibiu.</li>
              <li>Reabilitarea Scolii nr. 21 Sibiu in vederea imbunatatirii eficientei energetice</li>
              <li>Reabilitare Stadion de atletism si refacere imprejmuire in mun. Buzau, b-dul Unirii, jud. Buzau.</li>
              <li>Evaliare de risc la securitate in com. Gilau, str. Principala, jud. Cluj.</li>
            </ol>
          </v-flex>
          <v-flex md6 pl-3 class="no-padding">
            <v-img :src="p1" />
          </v-flex>
        </v-layout>
        <v-layout row py-4 wrap>
          <v-flex md6 pr-3 class="no-padding">
            <v-img :src="p4" />
          </v-flex>
          <v-flex md6 pl-3 class="p-image no-padding" align-center>
            <ol>
              <li>Studiu de coexistenţă privind utilizarea în comun a stâlpilor LEA de joasă si medie tensiune din mun. Bocsa, jud. Caras-Severin apartinand ENEL Distributie Banat SA, cu reţele de telecomunicaţii aparţinând SC UPC Romania SA.</li>
              <li>Studiu de coexistenţă privind utilizarea în comun a stâlpilor LEA de joasă si medie tensiune mun. Buhusi, loc. Sascut, jud. Bacau, apartinand DELGAZ GRIS SA, cu reţele de telecomunicaţii aparţinând SC UPC Romania SA.</li>
              <li>Studiu de coexistenţă privind utilizarea în comun a stâlpilor LEA de joasă si medie tensiune din loc. Dumbravenii, jud. Sibiu, apatinand SDEE Transilvania Sud SA, cu reţele de telecomunicaţii aparţinând SC UPC Romania SA.</li>
              <li>Studiu de coexistenţă privind utilizarea în comun a stâlpilor LEA de joasă si medie tensiune din com. Danes, jud. Mures, beneficiar SDEE Transilvania SUD SA. cu reţele de telecomunicaţii aparţinând SC UPC Romania SA.</li>
              <li>Studiu de coexistenţă privind utilizarea în comun a stâlpilor LEA de joasă tensiune din loc. Budus, loc. Budacu, jud. Bistrita, apartinand SDEE Transilvania Nord SA, cu reţele de telecomunicaţii aparţinând SC UPC Romania SA.</li>
            </ol>
          </v-flex>
        </v-layout>
        <v-layout row py-4 wrap>
          <v-flex md6 pr-3 class="p-image no-padding" align-center>
            <ol>
              <li>Obtinere Autorizatie de Construire Construcție rețea de televiziune digitală, internet și telefonie in mun. Buhusi, jud. Bacau.</li>
              <li>Obtinere Autorizatie de Construire pentru Construcție rețea de televiziune digitală, internet și telefonie in loc. Sascut, jud. Bacau.</li>
              <li>Obtinere Autorizatie de Construire Construcție alimentare cu energie electrica casa in com. Floresti, str. Avram Iancu, jud. Cluj.</li>
              <li>Obtinere Autorizatie de Construire Construcție alimentare cu energie electrica imobil in com. Floresti, str. Fagului, jud. Cluj.</li>
              <li>Obtinere Autorizatie de Construire Construcție alimentare cu energie electrica imobil in mun. Cluj-Napoca, str. Oasului, jud. Cluj.</li>
              <li>Obtinere Autorizatie de Construire Construcție alimentare cu energie electrica imobil in mun. Cluj-Napoca, str. Edgard Quines, jud. Cluj.</li>
            </ol>
          </v-flex>
          <v-flex md6 pl-3 class="no-padding">
            <v-img :src="p3" />
          </v-flex>
        </v-layout>
        <v-layout row py-4 wrap>
          <v-flex md6 pr-3 class="no-padding">
            <v-img :src="p2" />
          </v-flex>
          <v-flex md6 pl-3 class="p-image no-padding" align-center>
            <ol>
              <li>Executie instalatie electrice interioare pavilion comandament la imobilul nr. 45-15-01 U.M. 0827 mun.Cluj-Napoca, jud. Cluj.</li>
              <li>Executie instalatie paratraznet pavilion comandament la imobilul nr. 45-15-01 U.M. 0827 mun.Cluj-Napoca, jud. Cluj.</li>
              <li>Executie instalatii electrice, date, antiefractie birourii in mun. Turda, str. Campiei, jud. Cluj.</li>
              <li>Modernizare instalatii electrice casa, str. Plevnei, mun. Cluj Napoca, jud. Cluj.</li>
              <li>Modernizare instalatii electrice imobil, str. Corneliu Coposu, mun. Cluj Napoca, jud. Cluj.</li>
              <li>Executie bransamente Pausal in loc. Dumbraveni, jud. Sibiu, beneficiar SC UPC Romania SA.</li>
            </ol>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portofoliu",
  data: () => ({
    p1: require("../assets/portfolio/p1.jpg"),
    p2: require("../assets/portfolio/p2.jpg"),
    p3: require("../assets/portfolio/p3.jpg"),
    p4: require("../assets/portfolio/p4.jpg")
  })
};
</script>
<style lang="scss" scoped>
@import "../scss/variables/_colors.scss";
@import "../scss/mixins/_mixins.scss";
.no-padding {
  @include mobile-only {
    padding: 1px !important;
  }
}
.home-bg__hero {
  background-image: url("../assets/pictures/portfolio.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
  width: 100%;
  background-position: bottom;
  display: flex;
  position: relative;
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
  }
}
.white-bg {
  background-color: white;
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
ol {
  margin-top: 24px;
  margin-left: 20px;
  list-style: decimal;
  li {
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 4px 0;
    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>
