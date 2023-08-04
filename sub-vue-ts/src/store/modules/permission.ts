import routes from "../../router";

const menuFunc = () => {
  // @ts-ignore
  return routes.filter((route) => {
    return !route.meta || !route.meta.hidden;
  });
};

const state = {
  routes: menuFunc(),
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
