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
</style>

