import { SET_USER_DATA, SET_LOGIN_ERROR } from "@/store/mutation.types";

import {
  REGISTER_USER,
  LOGIN_USER,
  GET_USER_PROFILE
} from "@/store/action.types";
import http from "@/common/http.service.js";
import urls from "../../const/url";

const userModule = {
  namespaced: true,
  state: {
    user: {
      firstName: "",
      lastName: "",
      email: ""
    },
    loginError: ""
  },
  mutations: {
    [SET_USER_DATA]: function(state, data) {
      state.user = data;
    },
    [SET_LOGIN_ERROR]: function(state, error) {
      state.loginError = error;
    }
  },
  actions: {
    [GET_USER_PROFILE](context) {
      http.get(urls.userProfile).then(result => {
        if (result.data.success == true) {
          context.commit(SET_USER_DATA, result.data.model);
        }
      });
    },
    [REGISTER_USER]: function(context, data) {
      http.post(urls.registerUser, data).then(result => {
        if (result.data.success == true) {
          localStorage.setItem("accessToken", result.data.model.token);
          localStorage.setItem("refreshToken", result.data.model.refreshToken);
          localStorage.setItem("expiredDate", result.data.model.expired);
        }
      });
    },
    [LOGIN_USER](context, data) {
      return new Promise(resolve => {
        http.post(urls.loginUrl, data).then(response => {
          if (response.data.success == true) {
            context.commit(SET_LOGIN_ERROR, "");
            localStorage.setItem("accessToken", response.data.model.token);
            localStorage.setItem(
              "refreshToken",
              response.data.model.refreshToken
            );
            localStorage.setItem("expiredDate", response.data.model.expired);
          } else {
            context.commit(SET_LOGIN_ERROR, response.data.message);
          }
        });
        resolve();
      });
    }
  }
};

export default userModule;
