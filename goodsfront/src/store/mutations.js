import { USER_LOGIN, FETCH_USER_INFO, FETCH_SESSION } from "./mutation-types";

export default {
  [USER_LOGIN](state, isLogin) {
    state.isLogin = isLogin;
    console.log("isLogin: " + isLogin);
  },
  [FETCH_USER_INFO](state, userInfo) {
    state.userInfo = userInfo;
    console.log("userInfo" + userInfo);
  },
  [FETCH_SESSION](state, session) {
    state.session = session;
  },
};
