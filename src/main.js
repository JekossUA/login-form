import Vue from "vue";
import Vuelidate from "vuelidate";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import router from "./router";
import store from "@/store/index.js";
import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/style.css";
import AxiosDefault from "./common/axios.default.js";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VeeValidate);
AxiosDefault;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
