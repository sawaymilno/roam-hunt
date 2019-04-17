<template>
  <div>
    <Header></Header>
    <div class="list">
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
  methods: mapActions(["fetchHunts"]), //initiate created once app is complete
  created() {
    this.fetchHunts();
  }
};
</script>

<style scoped>
.list {
  margin: 0 25px 0 25px;
  justify-content: space-between;
}
</style>
