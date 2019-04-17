/* eslint-disable no-console */
import api from '../../api/letsRoamAPI';
import data from '../../data'
// import {
//   router
// } from '../../main';

const state = {
  hunts: data,
  filteredHunts: data,
  selectedHunt: null
};

const getters = {
  allHunts: state => state.hunts,
  isSearchCompleted: state => state.filteredHunts,
  selectedHunt: state => state.selectedHunt,
  filteredHunts: state => state.filteredHunts
};

const mutations = {
  setHunts: (state, hunts) => state.hunts = hunts,
  setSelectedHunt: (state, selectedHunt) => state.selectedHunt = selectedHunt,
  setFilteredHunts: (state, filteredHunts) => state.filteredHunts = filteredHunts
};

const actions = {
  async fetchHunts({
    commit
  }) {
    console.log(state, 'before')
    const response = await api.fetchHunts();
    const data = response.data.map(hunt => hunt.hunt_type)
    console.log(data);

    commit('setHunts', response.data)
    commit('setFilteredHunts', response.data)
  },
  onHuntSelect({
    commit
  }, hunt) {

    commit('setSelectedHunt', hunt)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}