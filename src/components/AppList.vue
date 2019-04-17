<template>
  <div>
    <div v-if="isSearchCompleted.length > 0" class="row">
      <!-- <img v-for="image in allImages" :src="image.link" :key="image.link"> -->
      <HuntList></HuntList>
      <HuntDetail/>
    </div>
    <h2 v-else>Please Do A Search</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HuntDetail from "./HuntDetail";
import HuntList from "./HuntList";
export default {
  name: "AppList",
  components: {
    HuntDetail,
    HuntList
  },
  computed: mapGetters(["allHunts", "isSearchCompleted", "selectedHunt"])
};
</script>

<style scoped>
/* .container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
} */
</style>