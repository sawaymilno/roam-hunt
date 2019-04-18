/* eslint-disable no-console */
import api from '../../api/letsRoamAPI';
import data from '../../data'
import {
  buildFilteredList
} from './buildFilteredList'
import {
  router
} from '../../main';
const getDefaultState = () => {
  return {
    showModal: false,
    first_name: "",
    last_name: "",
    email: "",
    minArtValue: '0',
    minCultureValue: '0',
    minDifficultyValue: '0',
    minHistoryValue: '0',
    maxDistanceValue: '0',
    minRatingValue: '0',
    minReviewsValue: '0',
    typeValue: {
      scavaHunt: false,
      ghostHunt: false
    },
    hunts: data,
    filteredHunts: [],
    selectedHunt: null
  };
}

const state = getDefaultState()

const getters = {
  showModal: state => state.showModal,
  allHunts: state => state.hunts,
  isSearchCompleted: state => state.filteredHunts,
  selectedHunt: state => state.selectedHunt,
  filteredHunts: state => state.filteredHunts
};

const mutations = {
  setModal: (state, value) => state.showModal = value,
  setFirstName: (state, value) => state.first_name = value,
  setLastName: (state, value) => state.last_name = value,
  setEmail: (state, value) => state.email = value,
  setHunts: (state, hunts) => state.hunts = hunts,
  setSelectedHunt: (state, selectedHunt) => state.selectedHunt = selectedHunt,
  setFilteredHunts: (state, filteredHunts) => state.filteredHunts = filteredHunts,

  setArt: (state, artValue) => state.minArtValue = artValue,
  setCulture: (state, cultureValue) => state.minCultureValue = cultureValue,
  setDifficulty: (state, difficultyValue) => state.minDifficultyValue = difficultyValue,
  setHistory: (state, historyValue) => state.minHistoryValue = historyValue,
  setDistance: (state, distanceValue) => state.maxDistanceValue = distanceValue,
  setRating: (state, ratingValue) => state.minRatingValue = ratingValue,
  setReviews: (state, reviewsValue) => state.minReviewsValue = reviewsValue,
  setType: (state, typeValue) => {
    return state.typeValue[`${typeValue}`] = !state.typeValue[`${typeValue}`]
  },

  resetState(state) {
    Object.assign(state, getDefaultState())
  }
};

const actions = {
  async fetchHunts({
    commit
  }) {
    const response = await api.fetchHunts();
    commit('setHunts', response.data)
    console.log(state.minArtValue, typeof state.minArtValue, state.hunts[0].art_focus, typeof state.hunts[0].art_focus, 'art')

  },
  onHuntSelect({
    commit
  }, hunt) {

    commit('setSelectedHunt', hunt)
  },
  onToggleModal({
    commit
  }) {
    commit('setModal', !state.showModal)
  },
  onFirst({
    commit
  }, value) {
    commit('setFirstName', value)
    console.log(state.first_name)
  },
  onLast({
    commit
  }, value) {
    commit('setLastName', value)
    console.log(state.last_name)
  },
  onEmail({
    commit
  }, value) {
    commit('setEmail', value)
    console.log(state.email);

  },
  onArt({
    commit
  }, value) {
    commit('setArt', value)
    console.log(state.minArtValue, typeof state.minArtValue)
  },
  onCulture({
    commit
  }, value) {
    commit('setCulture', value)
    console.log(state.minCultureValue)
  },
  onDifficulty({
    commit
  }, value) {
    commit('setDifficulty', value)
    console.log(state.minDifficultyValue)
  },
  onHistory({
    commit
  }, value) {
    commit('setHistory', value)
    console.log(state.minHistoryValue)
  },
  onDistance({
    commit
  }, value) {
    commit('setDistance', value)
    console.log(state.maxDistanceValue)
  },
  onRating({
    commit
  }, value) {
    commit('setRating', value)
    console.log(state.minRatingValue)
  },
  onReviews({
    commit
  }, value) {
    commit('setReviews', value)
    console.log(state.minReviewsValue)
  },
  onType({
    commit
  }, value) {
    commit('setType', value)
    console.log(state.hunts.map(hunt => hunt.hunt_type))
    console.log(state.typeValue.scavaHunt, state.typeValue.ghostHunt)
  },
  onReset({
    commit
  }) {
    commit('resetState')
    console.log(state);
    const resetHunts = async () => {
      const huntResponse = await api.fetchHunts();
      commit('setHunts', huntResponse.data)
    }
    resetHunts()
  },
  onSubmit({
    commit
  }) {

    console.log('insubmit');

    const filteredHunts = buildFilteredList(state)
    commit('setFilteredHunts', filteredHunts)
    router.push('/listview')
  },
  async onSubscribe({
    commit
  }) {
    console.log('insubscribe');
    // const subscriptionData = {
    //   email: state.email,
    //   first_name: state.first_name,
    //   last_name: state.last_name
    // }
    commit('setModal', !state.showModal)
    commit('setEmail', "")
    commit('setFirstName', '')
    commit('setLastName', '')
    console.log('first,last,email', state.first_name, state.last_name, state.email)
    const subResponse = await api.subscribePost(state.email, state.first_name, state.last_name)
    console.log(subResponse);

  }
};

export default {
  state,
  getters,
  mutations,
  actions
}