<template>
  <div v-if="selectedHunt" class="col-md-8 flex-column huntDetail">
    <div class="embed-responsive embed-responsive-16by9 list-group-item media">
      <img
        class="embed-responsive-item"
        :src="selectedHunt.huntLargePhotoURL"
        alt="selectedHunt.city"
      >
    </div>
    <div class="list-group-item media">
      <h4>{{`${selectedHunt.city}, ${selectedHunt.state} ${selectedHunt.country}`}}</h4>
      <div v-html="selectedHunt.lr_long_description"></div>
      <div class="list-group-item media outer">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5>Hunt Focus:</h5>
                <ul class="list-group">
                  <li
                    class="list-group-item li-odd d-flex justify-content-between align-items-center"
                  >
                    Art:
                    <span class="badge badge-odd badge-pill">{{selectedHunt.art_focus}}</span>
                  </li>
                  <li
                    class="list-group-item li-even d-flex justify-content-between align-items-center"
                  >
                    Culture:
                    <span class="badge badge-even badge-pill">{{selectedHunt.culture_focus}}</span>
                  </li>
                  <li
                    class="list-group-item li-odd d-flex justify-content-between align-items-center"
                  >
                    Difficulty:
                    <span
                      class="badge badge-odd badge-pill"
                    >{{selectedHunt.difficulty_focus}}</span>
                  </li>
                  <li
                    class="list-group-item li-even d-flex justify-content-between align-items-center"
                  >
                    History:
                    <span class="badge badge-even badge-pill">{{selectedHunt.history_focus}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5>Hunt Data:</h5>
                <ul class="list-group">
                  <li
                    class="list-group-item li-even d-flex justify-content-between align-items-center"
                  >
                    Hunt Length:
                    <span
                      class="badge badge-even badge-pill"
                    >{{`${selectedHunt.distance_miles} miles`}}</span>
                  </li>
                  <li
                    class="list-group-item li-odd d-flex justify-content-between align-items-center"
                  >
                    Rating:
                    <span class="badge badge-odd badge-pill">{{selectedHunt.star_rating}}</span>
                  </li>
                  <li
                    class="list-group-item li-even d-flex justify-content-between align-items-center"
                  >
                    Total Reviews:
                    <span
                      class="badge badge-even badge-pill"
                    >{{selectedHunt.total_reviews}}</span>
                  </li>
                  <li
                    class="list-group-item li-odd d-flex justify-content-between align-items-center"
                  >
                    Hunt Type:
                    <span class="badge badge-odd badge-pill">{{selectedHunt.hunt_type}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HuntDetail",
  computed: mapGetters(["selectedHunt"])
};
</script>

<style scoped>
.badge-even {
  color: white;
  background-color: #6aaeaa;
}
.badge-odd {
  color: white;
  background-color: #e87722;
}
.li-even {
  color: #e87722;
}
.li-odd {
  color: #6aaeaa;
}
.outer {
  background-color: #d9d9d6;
}
</style>

