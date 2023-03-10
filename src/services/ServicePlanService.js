import { httpClient } from "../config/axios";

export default {
  index() {
    return httpClient.get("/service-plans", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
      },
    });
  },
};
