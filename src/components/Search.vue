<template>
  <div>
    <input @input="fetchHunts">
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SearchBar",
  computed: mapGetters(["allHunts"]),
  methods: mapActions(["fetchHunts"])
};
</script>

<style scoped>
input {
  width: 75%;
}

div {
  text-align: center;
  margin: 20px;
}
</style>