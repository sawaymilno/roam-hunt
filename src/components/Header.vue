<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">
        <img
          src="https://www.letsroam.com/assets/img/lets_roam_logo.png"
          alt="Let's Roam"
          class="header-logo"
        >
      </router-link>
      <div class="fox-logo">
        <img
          src="https://www.letsroam.com/explorer/wp-content/uploads/2018/05/Foxtrot-218x300.png"
          alt="The Fox"
          class="fox-img"
        >
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link @click.native="onReset" class="nav-link" to="/">
            <p class="nav-link-content">Search</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/listview">
            <p class="nav-link-content">List</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/mapview">
            <p class="nav-link-content">Map</p>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="container subscription">
      <h3>For More Details, Updates & A Free Prize, Please Subscribe To Our Newsletter</h3>
      <form>
        <div class="form-row">
          <div class="col-5">
            <input
              @input="onEmail($event.target.value)"
              type="email"
              class="form-control"
              placeholder="Email"
            >
          </div>
          <div class="col">
            <input
              @input="onFirst($event.target.value)"
              type="text"
              class="form-control"
              placeholder="First Name"
            >
          </div>
          <div class="col">
            <input
              @input="onLast($event.target.value)"
              type="text"
              class="form-control"
              placeholder="Last Name"
            >
          </div>
        </div>
        <button @click.prevent="onSubscribe" class="btn">Subscribe</button>
      </form>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  methods: mapActions([
    "onReset",
    "onFirst",
    "onLast",
    "onEmail",
    "onSubscribe"
  ])
};
</script>

<style scoped>
header {
  padding: 0 0 3vh;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
button {
  width: 150px;
  background-color: #6aaeaa;
  margin: 2vh 0 0 0;
}
.navbar {
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07);
}
.subscription {
  text-align: center;
}
.header-logo {
  margin: 0 0 0 25px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  height: 50px;
}
.header-logo:hover {
  background-color: #f5f2ef;
}
.fox-logo {
  margin: 0 0 0 300px;
}
.fox-img {
  height: 50px;
  width: 50px;
}
.nav-item {
  margin: 0 50px 0 50px;
}
h3 {
  margin: 20px 0 25px;
  color: #6aaeaa;
  font-family: sans-serif;
}
p {
  margin: 10px 0;
  color: #e87722;
  font-family: sans-serif;
}
p:hover {
  text-decoration: underline;
}
</style>

