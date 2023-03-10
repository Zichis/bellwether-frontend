import { httpClient } from "../config/axios";

export default {
  index() {
    return httpClient.get("/location-types", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
      },
    });
  },
};
