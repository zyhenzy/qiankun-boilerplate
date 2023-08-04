import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const modulesFiles = require.context("./modules", true, /\.ts$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  modules[moduleName] = value.default;
  return modules;
}, {});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { ...modules },
});
