import { httpClient } from "../config/axios";

export default {
  register(registrationForm) {
    return httpClient.post("/customer-registration", registrationForm, {
        headers: {
            'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
        }
    });
  },
};
