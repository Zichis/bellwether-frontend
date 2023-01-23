import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
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
import 'animate.css';
import { MotionPlugin } from "@vueuse/motion";

library.add(faBars, faThLarge, faUsers, faEye, faUserPlus);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueSweetalert2);
Vue.use(MotionPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
