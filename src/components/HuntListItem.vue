<template>
  <li class="list-group-item media" @click="onHuntSelect(hunt)">
    <div>{{hunt.city}}</div>
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
