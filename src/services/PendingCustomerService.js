import { httpClient } from "../config/axios";

export default {
    index() {
        return httpClient.get("/pending-customers", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
            },
        });
    },

    show(id) {
        return httpClient.get(`/pending-customers/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
          },
        });
    },

    approve(id) {
        return httpClient.post(`/pending-customers/${id}/approve`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("bellwether_token"),
            },
        })
    }
}
