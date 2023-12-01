// store.ts
import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";

export interface RootState {
  // Define your root state properties here
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  state: {
    // Define your root state properties here
  },
  mutations: {
    // Define your mutations here
  },
  actions: {
    // Define your actions here
  },
  getters: {
    // Define your getters here
  },
  modules: {
    // You can split your store into modules if it becomes large
  },
});
