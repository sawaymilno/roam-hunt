/* eslint-disable no-console */
import axios from 'axios';

const letsRoamURL = 'https://www.scavengerhunt.com/app/ios_ajax_json_hunt_locations.php/ios_ajax_hunt_locations.php?password=asf4fvadfv31das';
const subscribePost = 'https://www.letsroam.com/api/v1/newsletter/subscribe_no_drip';

export default {
  fetchHunts() {
    return axios.get(letsRoamURL, {
      // headers: {
      //   Authorization:
      // }
    })
  },
  subscribePost(userEmail, userFirst_name, userLast_name) {

    return axios.post(subscribePost, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080'
      },
      params: {
        email: userEmail,
        first_name: userFirst_name,
        last_name: userLast_name
      }
    })
  }
};