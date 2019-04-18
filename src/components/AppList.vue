<template>
  <div v-if="isSearchCompleted.length > 0" class="outer">
    <HuntList></HuntList>
    <HuntDetail class="box"></HuntDetail>
  </div>
  <h2 v-else>Zero Results Please Visit The Search Page</h2>
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
h2 {
  margin: 36vh 30vw;
}
.box {
  position: -webkit-sticky;
  position: sticky;
  bottom: 00px;
  margin: 0 0 0 33vw;
}
.outer {
  justify-content: space-between;
}
</style>