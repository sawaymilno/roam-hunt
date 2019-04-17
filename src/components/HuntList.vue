<template>
  <ul class="list-group col-md-4">
    <HuntListItem
      v-for="hunt in filteredHunts"
      :hunt="hunt"
      :key="hunt.id"
      @huntSelect="onHuntSelect"
    ></HuntListItem>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import HuntListItem from "./HuntListItem";
export default {
  name: "HuntList",
  components: {
    HuntListItem
  },
  computed: mapGetters(["filteredHunts"]),
  methods: {
    onHuntSelect(hunt) {
      this.$emit("huntSelect", hunt);
    }
  }
};
</script>

<style>
</style>


