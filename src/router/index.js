import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/website/Home.vue";
import About from "../views/website/About.vue";
import GetStarted from "../views/website/GetStarted.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard";
import CustomerList from "../views/customers/List";
import CustomerAdd from "../views/customers/Add";
import CustomerEdit from "../views/customers/Edit";
import CustomerShow from "../views/customers/Show";
import PendingApproval from "../views/pending-customers/List";
import PendingApprovalView from "../views/pending-customers/Show";
import PageNotFound from "../views/PageNotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "website",
    component: () => import("../views/website/App.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/get-started",
        name: "GetStarted",
        component: GetStarted,
      }
    ]
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
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
      {
        path: "pending-approvals",
        component: () => import("../views/pending-customers/App.vue"),
        children: [
          {
            path: "/",
            name: "PendingApproval",
            component: PendingApproval,
          },
          {
            path: ":id",
            name: "PendingApprovalView",
            component: PendingApprovalView,
          },
        ],
      }
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
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
