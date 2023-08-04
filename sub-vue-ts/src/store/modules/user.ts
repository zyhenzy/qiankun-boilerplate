import { login } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

type StateType = {
  token: string;
};

const state = {
  token: getToken(),
};

const mutations = {
  SET_TOKEN: (state: StateType, token: string) => {
    state.token = token;
  },
};

const actions = {
  // @ts-ignore
  login({ commit }, userInfo: { username: string; password: string }) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response: any) => {
          // todo:set token
          commit("SET_TOKEN", response.message);
          setToken(response.message);
          resolve(response);
        })
        .catch((error: never) => {
          reject(error);
        });
    });
  },

  // remove token
  // @ts-ignore
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      removeToken();
      // @ts-ignore
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
