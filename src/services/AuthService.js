import { httpClient } from "../config/axios";

export default {
  login(loginForm) {
    return httpClient.post("/login", loginForm, {});
  },
};
