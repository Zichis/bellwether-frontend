import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard";
import CustomerList from "../views/customers/List";
import CustomerAdd from "../views/customers/Add";
import CustomerEdit from "../views/customers/Edit";
import CustomerShow from "../views/customers/Show";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/app",
    name: "App",
    component: () => import("../views/App.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "customers",
        component: () => import("../views/customers/App.vue"),
        children: [
          {
            path: "/",
            name: "CustomerList",
            component: CustomerList,
          },
          {
            path: "add",
            name: "CustomerAdd",
            component: CustomerAdd,
          },
          {
            path: ":id/edit",
            name: "CustomerEdit",
            component: CustomerEdit,
          },
          {
            path: ":id",
            name: "CustomerShow",
            component: CustomerShow,
          }
        ],
      },
    ],
  },
  {
    path: "/auth/",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
