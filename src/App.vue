<template>
  <div>
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  },
  methods: mapActions(["fetchHunts"])
  // created() {
  //   this.fetchHunts();
  // }
};
</script>