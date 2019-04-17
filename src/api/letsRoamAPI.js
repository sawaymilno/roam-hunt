import axios from 'axios';

const letsRoamURL = 'https://www.scavengerhunt.com/app/ios_ajax_json_hunt_locations.php/ios_ajax_hunt_locations.php?password=asf4fvadfv31das';

export default {
  fetchHunts() {
    return axios.get(letsRoamURL

      // headers: {
      //   'Access-Control-Allow-Credentials': true
      // }
    )
  }
};