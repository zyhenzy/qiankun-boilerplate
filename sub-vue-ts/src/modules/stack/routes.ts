import Layout from "../../components/layout/index.vue";

const stackRouter = {
  path: "/stack",
  component: Layout,
  redirect: "/stack/index",
  name: "Stack",
  meta: {
    title: "Stack",
    icon: "stack",
  },
  children: [
    {
      path: "index",
      component: () => import("../stack/pages/index.vue"),
      name: "Index",
      meta: { title: "Stack/Index" },
    },
    {
      path: "stackList",
      component: () => import("../stack/pages/stackList.vue"),
      name: "StackList",
      meta: { title: "StackList" },
    },
  ],
};

export default stackRouter;
