<template>
  <div>
    <div class="home-bg__hero">
      <v-container class="hero__text">
        <h1>serviicii proiectare si servicii executie</h1>
      </v-container>
      <div class="overlay" />
    </div>
    <div>
      <v-container pt-3>
        <h2>Servicii - Proiectare</h2>
        <v-divider color="white" />
      </v-container>
    </div>
    <div class="white-bg">
      <v-container pt-3 class="section section__first">
        <h2 class="pt-3">
          In domeniul proiectarii instalatiilor electrice civile si
          industriale SC Energy Branching Solutions SRL va pune la
          dispozitie o gama larga de servicii din care mentionam:
        </h2>
        <ul>
          <li>
            Studii de soluții pentru conectarea la rețeaua electrică
            națională;
          </li>
          <li>
            Studii de fezabilitate si prefezabilitate, inclusiv o
            analiză comparativă tehnico-economică a soluțiilor ;
          </li>
          <li>
            Proiecte tehnice. Oferim solutii complete de proiectare a
            retelelor electrice de joasa si medie tensiune 0,4 – 20 kV,
            posture de transformare.
          </li>
          <li>Detalii de execuție,</li>
          <li>Studii de coexitenta;</li>
          <li>Documente tehnice de proiectare și licitație</li>
          <li>
            Documentatii tehnice pentru obtinere avize / acordurii
            conform Certificat de Urbanism
          </li>
          <li>Documentație tehnică pentru Autorizație de Construcție</li>
          <li>Proiectare instalatii electrice interioare;</li>
          <li>
            Proiectare siteme de iluminat interior, exterior,
            architectural;
          </li>
          <li>Proiectare instalaţii electrice de protecţie, automatizari;</li>
          <li>Proiectare instalaţii electrice de curenţi slabi:</li>
          <li>Proiectare sistemelor securitate si supraveghere</li>
          <li>Proiectare panouri fotovoltaice</li>
          <li>Proiectare instalatii termice si sanitare</li>
          <li>
            Proiectare instalatii de protective impotrica descarcarilor
            atmosferice(paratraznet);
          </li>
          <li>
            Proiectare instalatii de protectie impotriva curentilor
            reziduali (prize de pamant);
          </li>
          <li>
            Proiectare sistem inteligent de automatizare a instalațiilor
            electrice și de control de la distanță care facilitează
            condițiile de viață şi de muncă KNX. Prin controlul și
            monitorizarea tuturor componentelor implicate, cel mai
            utilizat standard pentru sistemele electronice de
            automatizare vă oferă soluţiile potrivite dacă vorbim de
            controlul luminilor, jaluzelelor, încălzirii sau
            ventilaţiei, de acasă sau de la distanţă.
          </li>
        </ul>
        <v-layout row py-4 wrap>
          <v-flex md6 pr-3 class="no-padding">
            <v-img :src="img1" />
          </v-flex>
          <v-flex md6 pl-3 class="p-image no-padding">
            <p>Departamentul nostru de proiectare ofera suport tehnic si asistență tehnică în timpul executării și punerii în funcțiune a instalatiilor electrice. De asemenea, vom dezvolta și furniza toate documentele tehnice necesare pentru perioada de dupa finalizarea proiectului.</p>
            <p
              class="pt-3"
            >Cea mai importantă parte a unui nou sistem electric este faza de proiectare. Prin activitatea pe care o desfăşoară, personalul urmăreşte satisfacerea nevoilor clienţilor, prin promovarea unor soluţii tehnice moderne, cu costuri minime de exploatare şi implementare, încadrate în normele şi standardele tehnice în vigoare.</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container pt-3>
        <h2>Servicii - Executie</h2>
        <v-divider color="white" />
      </v-container>
    </div>
    <div class="white-bg">
      <v-container pt-3 class="section section__first">
        <h2
          class="pt-3"
        >In domeniul executiei instalatiilor electrice civile si industriale SC Energy Branching Solutions SRL va pune la dispozitie o gama larga de servicii. Executam diverse instalatii electrice atat noi cat si pentru modernizarea celor existente</h2>
        <ul>
          <li>Executie instalatii de alimentare cu energie electrica, bransamente;</li>
          <li>Executii instalatii electrice interioarepentru constructii civile si industriale;</li>
          <li>Executii Instalatii de curenti slabi, securitate si supraveghere.</li>
          <li>Executie sistem inteligent de automatizare a instalațiilor electrice și de control de la distanță KNX</li>
          <li>Ansamblare si montare tablouri electrice, automatizari;</li>
          <li>Executie instalatii de protective impotrica descarcarilor atmosferice (paratraznet);</li>
          <li>Executie instalatii de protectie impotriva curentilor reziduali (prize de pamant);</li>
          <li>Efectuare masuratori pentru rezistenta de dispersie a prizelor de pamant, rezistenta de izolatie a cablurilor electrice.</li>
        </ul>
        <v-layout row py-4 wrap>
          <v-flex md6 pr-3 class="p-image no-padding" align-center>
            <p>Echipa noastră de specialiști are o experiență vastă în activitatea de proiectare si executie în domeniul instalațiilor electrice civile si industriale. Instalațiile sunt implementate sistematic, riguros și verificate atent astfel încât să permită implementarea optimă în practică, oferind eficienta, fiabilitate, diminuearea riscurilor de incendiu si de accidentare a persoanelor in timpul exploatarii.</p>
          </v-flex>
          <v-flex md6 pl-3 class="no-padding">
            <v-img max-height="300" :src="img2" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  data: () => ({
    img1: require("../assets/poza10.jpg"),
    img2: require("../assets/pictures/p4.jpg")
  })
};
</script>
<style lang="scss" scoped>
@import "../scss/variables/_colors.scss";
@import "../scss/mixins/_mixins.scss";

.home-bg__hero {
  background-image: url("../assets/pictures/p3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
  background-position: center;
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
.p-image {
  align-self: center;
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
.section {
  h2 {
    font-size: 25px;
    text-align: justify;

    color: $primary;
  }
  ul {
    margin-top: 24px;
    margin-left: 20px;
    list-style: disc;
    li {
      font-size: 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 8px 0;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .last-p {
    font-size: 25px;
    margin-top: 24px;
    color: $primary;
  }
}
.no-padding {
  @include mobile-only {
    padding: 1px !important;
  }
}
</style>
