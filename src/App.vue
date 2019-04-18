<template>
  <div class="layout">
    <Header></Header>
    <Modal v-if="showModal"></Modal>
    <div class="list">
      <router-view></router-view>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./components/Header";
import Modal from "./components/Modal";
import BottomNav from "./components/BottomNav";
export default {
  name: "App",
  components: {
    Header,
    Modal,
    BottomNav
  },
  computed: mapGetters(["showModal"]),
  methods: mapActions(["fetchHunts"]),
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
</style>
