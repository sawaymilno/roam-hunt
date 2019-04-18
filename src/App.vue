<template>
  <div class="layout">
    <Header></Header>
    <div class="list">
      <router-view></router-view>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
export default {
  name: "App",
  components: {
    Header,
    BottomNav
  },
  methods: mapActions(["fetchHunts"]), //initiate created once app is complete
  created() {
    this.fetchHunts();
  }
};
</script>

<style scoped>
.list {
  margin: 0 25px 70px 25px;
  justify-content: space-between;
}
/* .layout { */
/* justify-content: space-between; */
/* align-items: center; */
/* } */
</style>
