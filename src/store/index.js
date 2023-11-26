import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const store = createStore({
    state: {
      products: [],
      cart: [],
      code_promo: "A1239",
    },
    mutations,
    actions,
    getters,
    plugins: [createPersistedState()],
});

//export store
export default store;
