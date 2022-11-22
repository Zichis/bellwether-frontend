import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./css/main.css";
import "./config/axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faThLarge,
  faUsers,
  faEye,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faThLarge, faUsers, faEye, faUserPlus);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
