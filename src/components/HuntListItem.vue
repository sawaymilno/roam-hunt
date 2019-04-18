<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
    @click="onHuntSelect(hunt)"
  >
    <div>{{`${hunt.city}, ${hunt.state}`}}</div>
    <span class="badge">{{`${hunt.star_rating} Stars`}}</span>
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HuntListItem",
  props: ["hunt"],
  methods: mapActions(["onHuntSelect"])
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}
li:hover {
  background-color: #eee;
}
</style>
