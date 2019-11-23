<template>
  <div>
    <div class="home-bg__hero">
      <v-container class="hero__text">
        <h1>Contact</h1>
      </v-container>
      <div class="overlay" />
    </div>
    <v-container pt-3>
      <h2>Trimite-ne un mesaj</h2>
      <v-divider color="white" />
    </v-container>
    <div class="white-bg">
      <v-container>
        <v-layout row wrap>
          <v-flex md6 xs12></v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md6 xs12 pr-3 class="no-padding">
            <v-text-field
              label="Nume si prenume"
              v-model="name"
              :error-messages="nameError"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
          </v-flex>
          <v-flex md6 xs12 pl-3 class="no-padding">
            <v-text-field label="Telefon" v-model="phone"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md6 xs12 pr-3 class="no-padding">
            <v-text-field
              label="Subiect"
              v-model="subject"
              :error-messages="subjectError"
              @input="$v.subject.$touch()"
              @blur="$v.subject.$touch()"
            ></v-text-field>
          </v-flex>
          <v-flex md6 xs12 pl-3 class="no-padding">
            <v-text-field
              label="Email"
              v-model="email"
              :error-messages="emailError"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md6 xs12 pr-3 class="no-padding">
            <v-textarea label="Mesaj" v-model="message" />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md6 xs12 pr-3 class="no-padding">
            <v-btn color="primary" full-width @click="sendEmail">Trimite</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar v-model="snackbar" color="info" :timeout="3000">Mesajul a fost trimis cu succes</v-snackbar>
    </div>
  </div>
</template>

<script>
import { apiCall } from "../service/api";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Contact",
  data: () => ({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    snackbar: false
  }),
  head() {
    return {
      title: "Contact - Energy Branching Solutions",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Contact - Energy Branching Solutions"
        }
      ]
    };
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    subject: {
      required
    }
  },
  computed: {
    subjectError() {
      const errors = [];
      if (!this.$v.subject.$dirty) return errors;
      !this.$v.subject.required &&
        errors.push("Va rugam introduceti subiectul");
      return errors;
    },
    nameError() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required &&
        errors.push("Va rugam introduceti numele si prenumele");
      return errors;
    },
    emailError() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("Va rugam introduceti un email");
      !this.$v.email.email &&
        errors.push("Va rugam introduceti un email valid");
      return errors;
    }
  },
  methods: {
    clearData() {
      this.name = "";
      this.email = "";
      this.subject = "";
      this.phone = "";
      this.message = "";
    },
    clientMail() {
      const mail = `
        <div class="container" style="width: 768px; margin: 0 auto;">
          <p>
            Nume si prenume: ${this.name}
          </p>
          </br>
          <p>
            Telefon: ${this.phone}
          </p>
          </br>
          <p>
            Email: ${this.email}
          </p>
          </br>
          <p>
            Mesaj: ${this.message}
          </p>
          </br>
        </div>
      `;
      return mail;
    },
    sendEmail() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const payload = {
          comanda: this.comanda,
          masina: this.car,
          body: this.clientMail()
        };
        apiCall("post", "/email/send", {
          ...payload,
          subject: this.subject,
        })
          .then(rsp => {
            this.snackbar = true;
          })
          .catch(err => console.log(err));
      }
    }
  }
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
.home-bg__hero {
  background-image: url("../assets/pictures/p2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
  width: 100%;
  background-position: center;
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
.white-bg {
  background-color: #fff;
  height: 100%;
}
</style>
