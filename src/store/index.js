import Vue from "vue";
import Vuex from "vuex";
import userModule from "./modules/user";

let storeDescription = {
  modules: {
    userStore: userModule
  }
};

Vue.use(Vuex);

const store = new Vuex.Store(storeDescription);

export default store;
