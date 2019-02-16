import Axios from "axios";
import urls from "../const/url";

export default {
  buildUrlWithSearchParams(requestUrl, params = null) {
    var url = new URL(requestUrl);
    if (params != null)
      Object.keys(params).forEach(key =>
        url.searchParams.append(key, params[key])
      );
    return url;
  },

  async get(requestUrl) {
    return Axios.get(requestUrl);
  },
  getWithParams(requestUrl, params) {
    requestUrl = this.buildUrlWithSearchParams(requestUrl, params);
    return Axios.get(requestUrl);
  },

  post(requestUrl, model) {
    return Axios.post(requestUrl, model);
  },
  put(requestUrl, model) {
    return Axios.put(requestUrl, model);
  },
  delete(requestUrl) {
    return Axios.delete(requestUrl);
  },

  refreshTokenRequest() {
    var refreshToken = {
      token: localStorage.getItem("accessToken"),
      refreshToken: localStorage.getItem("refreshToken"),
      expired: localStorage.getItem("expiredDate")
    };
    return Axios.post(urls.refreshTokenUrl, refreshToken);
  }
};
