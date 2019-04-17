<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
    @click="onHuntSelect(hunt)"
  >
    <div>{{hunt.city}}</div>
    <span class="badge">{{`${hunt.star_rating} Stars`}}</span>

    <!-- <img class="mr-3" :src="thumbnailUrl"> -->
    <!-- <div class="media-body">{{video.snippet.title}}</div> -->
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HuntListItem",
  props: ["hunt"],
  // computed: {
  //   thumbnailUrl() {
  //     return this.video.snippet.thumbnails.default.url;
  //   }
  // },
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
