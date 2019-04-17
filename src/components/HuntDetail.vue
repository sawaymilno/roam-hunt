<template>
  <div v-if="selectedHunt" class="col-md-8">
    <!-- <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="videoUrl"/>
    </div>
    <div class="details">
      <h4>{{video.snippet.title}}</h4>
      <p>{{video.snippet.description}}</p>
    </div>-->
    <p>{{selectedHunt.city}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HuntDetail",
  computed: mapGetters(["selectedHunt"])
  // props: ["hunt"]
  // computed: {
  //   videoUrl() {
  //     const { videoId } = this.video.id;
  //     return `https://www.youtube.com/embed/${videoId}`;
  //   }
  // }
};
</script>

<style scoped>
.details {
  margin-top: 10;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>

