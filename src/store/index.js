import Vuex from "vuex";
import Vue from "vue";
import address from "./modules/address";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    address,
  },
  plugins: [createPersistedState()],
});
