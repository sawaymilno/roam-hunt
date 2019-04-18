/* eslint-disable no-console */
import axios from 'axios';

const letsRoamURL = 'https://www.scavengerhunt.com/app/ios_ajax_json_hunt_locations.php/ios_ajax_hunt_locations.php?password=asf4fvadfv31das';
const subscribePost = 'https://www.letsroam.com/api/v1/newsletter/subscribe_no_drip';

export default {
  fetchHunts() {
    return axios.get(letsRoamURL)
  },
  subscribePost(email, first_name, last_name) {
    console.log(email, first_name, last_name);

    return axios.post(subscribePost, {
      email,
      first_name,
      last_name
    })
  }
};