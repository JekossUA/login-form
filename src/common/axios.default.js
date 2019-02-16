import router from "../router";
import Axios from "axios";
import Http from "./http.service.js";

class AxiosDefault {
  constructor() {
    var token = localStorage.getItem("accessToken");
    if (token) {
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      Axios.defaults.headers.common["Authorization"] = null;
    }

    Axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    const UNAUTHORIZED = 401;
    Axios.interceptors.response.use(
      response => response,
      error => {
        const { status } = error.response;
        if (status === UNAUTHORIZED) {
          Http.refreshTokenRequest().then(response => {
            if (response.data.errorCode == 401)
              router.push({
                name: "register"
              });
          });
        }
        return null;
      }
    );
  }
}
export default new AxiosDefault();
