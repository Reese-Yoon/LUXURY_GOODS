import { FETCH_USER_INFO, FETCH_SESSION } from "./mutation-types";

import axios from "axios";
import cookies from "vue-cookies";

//import router from '@/router'
// npm install axios --save-dev

export default {
  fetchUserInfo({ commit }, id) {
    return axios
      .get(`http://localhost:7777/member/mypage/${id}`)
      .then((res) => {
        cookies.set("session", res.data.id);
        commit(FETCH_USER_INFO, res.data);
      });
  },
  fetchSession({ commit }, session) {
    commit(FETCH_SESSION, session);
    console.log(session);
  },
};
