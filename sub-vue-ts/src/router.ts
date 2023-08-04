import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "./components/layout/index.vue";
import stackRouter from "@/modules/stack/routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: {
      title: "dashboard",
      icon: "dashboard",
      affix: true,
    },
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "dashboard",
          affix: true,
        },
      },
    ],
  },
  stackRouter,
];


export default routes;
