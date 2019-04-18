<template>
  <!-- <div>
    <input @input="fetchHunts">
  <div class="list-group-item media outer">-->
  <form>
    <div class="row">
      <div class="col-sm">
        <h5>Hunt Focus:</h5>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item li-odd d-flex justify-content-between align-items-center">
                Art:
                <div class="form-group">
                  <select @input="onArt($event.target.value)" class="form-control">
                    <option value="0">ANY</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </li>
              <li class="list-group-item li-even d-flex justify-content-between align-items-center">
                Culture:
                <div class="form-group">
                  <select @input="onCulture($event.target.value)" class="form-control">
                    <option value="0">ANY</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </li>
              <li class="list-group-item li-odd d-flex justify-content-between align-items-center">
                Difficulty:
                <div class="form-group">
                  <select @input="onDifficulty($event.target.value)" class="form-control">
                    <option value="0">ANY</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </li>
              <li class="list-group-item li-even d-flex justify-content-between align-items-center">
                History:
                <div class="form-group">
                  <select @input="onHistory($event.target.value)" class="form-control">
                    <option value="0">ANY</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <h5>Hunt Data:</h5>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item li-even d-flex justify-content-between align-items-center">
                Hunt Length:
                <div class="form-group">
                  <select @input="onDistance($event.target.value)" class="form-control">
                    <option value="0">ANY</option>
                    <option value=".5">0-.5</option>
                    <option value="1">0-1</option>
                    <option value="1.5">0-1.5</option>
                    <option value="2">0-2</option>
                    <option value="3">0-3</option>
                  </select>
                </div>
              </li>
              <li class="list-group-item li-odd d-flex justify-content-between align-items-center">
                Rating:
                <div class="form-group">
                  <select @input="onRating($event.target.value)" class="form-control">
                    <option value="0">ANY</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
              <li class="list-group-item li-even d-flex justify-content-between align-items-center">
                Total Reviews:
                <div class="form-group">
                  <select @input="onReviews($event.target.value)" class="form-control">
                    <option value="0">ANY</option>
                    <option value="100">100+</option>
                    <option value="300">300+</option>
                    <option value="500">500+</option>
                    <option value="800">800+</option>
                  </select>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Hunt Type:
                <div @input="onType($event.target.value)" class="d-flex checkbox">
                  <div class="form-check checkbox">
                    <input class="form-check-input" type="checkbox" value="scavaHunt">
                    <label class="form-check-label" for="checkbox1">Scavenger</label>
                  </div>
                  <div class="form-check checkbox">
                    <input class="form-check-input" type="checkbox" value="ghostHunt">
                    <label class="form-check-label" for="checkbox2">Ghost</label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
      <button @click.prevent="onSubmit" class="btn-lg btn-primary">Submit</button>
      <button @click="onReset" type="reset" value="reset" class="btn-lg btn-secondary">Reset</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SearchBar",
  computed: mapGetters(["allHunts"]),
  methods: mapActions([
    "fetchHunts",
    "onArt",
    "onCulture",
    "onDifficulty",
    "onHistory",
    "onDistance",
    "onRating",
    "onReviews",
    "onType",
    "onReset",
    "onSubmit"
  ])
};
</script>

<style scoped>
button {
  width: 150px;
}
li {
  height: 104px;
}
div {
  text-align: center;
  margin: 10px;
}
.form-control {
  background-color: #e87722;
  color: black;
}
.checkbox {
  margin: 10px;
}
.btn-primary {
  background-color: #e87722;
}
.btn-secondary {
  background-color: #e87722;
}
</style>