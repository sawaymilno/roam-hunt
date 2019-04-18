<template>
  <footer class="row">
    <div class="c-footer__social--icons col">
      <div class="row">
        <a
          title="Let's Roam Facebook"
          target="_blank"
          href="https://www.facebook.com/LetsRoamOfficial/"
        >
          <img
            src="https://www.letsroam.com/assets/images/footer/fb_icon.png"
            alt="Let's Roam App Facebook"
            class="c-footer__image--social"
          >
        </a>
        <a title="Let's Roam Twitter" href="https://twitter.com/letsroam_real" target="_blank">
          <img
            src="https://www.letsroam.com/assets/images/footer/tw_icon.png"
            alt="Let's Roam App Twitter"
            class="c-footer__image--social lr-margin__h--10"
          >
        </a>
        <a
          title="Let's Roam Instagram"
          href="https://www.instagram.com/LetsRoam_ScavengerHunt/"
          target="_blank"
        >
          <img
            src="https://www.letsroam.com/assets/images/footer/insta_icon.png"
            alt="Let's Roam App Instagram"
            class="c-footer__image--social"
          >
        </a>
      </div>
    </div>
    <div class="c-footer__legal--links">
      <a
        class="h-hover__underline"
        title="Let's Roam Terms Of Service"
        href="https://www.letsroam.com/terms_of_service"
        target="_blank"
      >Terms of Service</a>
      <a
        class="h-hover__underline"
        title="Let's Roam Privacy Policy"
        href="https://www.letsroam.com/privacy_policy"
        target="_blank"
      >Privacy Policy</a>
      <a
        class="h-hover__underline"
        title="Let's Roam Sitemap"
        href="https://www.letsroam.com/sitemap"
        target="_blank"
      >Sitemap</a>
    </div>
  </footer>
  <!-- <footer>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">
        <img
          src="https://www.letsroam.com/assets/img/lets_roam_logo.png"
          alt="Let's Roam"
          class="header-logo"
        >
      </router-link>
      <div class="fox-logo">
        <img
          src="https://www.letsroam.com/explorer/wp-content/uploads/2018/05/Foxtrot-218x300.png"
          alt="The Fox"
          class="fox-img"
        >
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link @click.native="onReset" class="nav-link" to="/">
            <p class="nav-link-content">Search</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/listview">
            <p class="nav-link-content">List</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/mapview">
            <p class="nav-link-content">Map</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>-->
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  methods: mapActions(["onReset"])
};
</script>

<style scoped>
footer {
  background-color: #505759;
}
.c-footer__social--icons {
  margin: 3vh 0 3vh 2vw;
}
.c-footer__image--social {
  height: 40px;
  margin: 1vh 2vw;
}
.c-footer__legal--links {
  margin: 5vh;
}
.h-hover__underline {
  margin: 3vh;
  color: white;
}
.navbar {
  justify-content: space-between;
  box-shadow: 3px 0 0 1px rgba(0, 0, 0, 0.07);
}
.subheader {
  text-align: center;
}
.header-logo {
  margin: 0 0 0 25px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  height: 50px;
}
.header-logo:hover {
  background-color: #f5f2ef;
}
.fox-logo {
  margin: 0 0 0 300px;
}
.fox-img {
  height: 50px;
  width: 50px;
}
.nav-item {
  margin: 0 50px 0 50px;
}
h3 {
  margin: 20px 0 25px;
  color: #e87722;
  font-family: sans-serif;
}
p {
  margin: 10px 0;
  color: #e87722;
  font-family: sans-serif;
}
p:hover {
  text-decoration: underline;
}
.sub-header {
  justify-content: space-between;
}
</style>

