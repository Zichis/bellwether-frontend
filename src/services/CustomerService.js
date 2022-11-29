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

  show(id) {
    return httpClient.get(`/customers/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
      },
    });
  },

  update(id, editCustomerForm) {
    console.log("hi");
    return httpClient.patch(`/customers/${id}`, editCustomerForm, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
      },
    });
  },
};
