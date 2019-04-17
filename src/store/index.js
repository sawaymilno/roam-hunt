import Vuex from 'vuex';
import Vue from 'vue';
import hunts from './modules/hunts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    hunts
  }
});