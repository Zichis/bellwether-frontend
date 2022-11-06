import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://bellwether_api.test/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
});
