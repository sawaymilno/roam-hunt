<template>
  <!-- <div class="outer"> -->
  <div v-if="isSearchCompleted.length > 0" class="outer">
    <HuntList></HuntList>
    <HuntDetail class="box"></HuntDetail>
  </div>
  <h2 v-else>Please Do A Search</h2>
  <!-- </div> -->
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
.box {
  position: -webkit-sticky;
  position: sticky;
  bottom: 00px;
  margin: 0 0 0 33vw;
}
.outer {
  justify-content: space-between;
}

/* img {
  max-width: 100%;
  padding: 5px;
} */
</style>