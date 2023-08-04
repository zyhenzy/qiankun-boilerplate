import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import {getToken} from "@/utils/auth";

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

let router = null;
let instance:any = null;

function render(props = {}) {
  // @ts-ignore
  const { container } = props;

  Vue.use(ElementUI);

  router = new VueRouter({
    // @ts-ignore
    base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue-ts/' : '/',
    mode: 'history',
    routes,
  });

  // const router = new VueRouter({
  //   mode: "history",
  //   base: process.env.BASE_URL,
  //   routes,
  // });

  router.beforeEach(async (to, from, next) => {
    // determine whether the user has logged in
    const hasToken = getToken();

    if (to.path === "/login") {
      next();
    } else if (hasToken) {
      console.log(hasToken);
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  });

  router.afterEach(() => {
    // finish progress bar
  });


  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
// @ts-ignore
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
