import { httpClient } from "../config/axios";

export default {
  add(addCustomerForm) {
    return httpClient.post("/customers", addCustomerForm, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
      },
    });
  },

  index() {
    return httpClient.get("/customers", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
      },
    });
  },

  delete(id) {
    return httpClient.delete(`/customers/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
      },
    });
  },
};
