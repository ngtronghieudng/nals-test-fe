import Vue from 'vue';
import { ActionTree } from 'vuex';
import { MUTATIONS } from './mutations';
import { State } from './state';

const webApi = new Vue();

const ACTIONS = {
  FETCH_USER: 'fetchUser'
};

const actions: ActionTree<State, State> = {
  async [ACTIONS.FETCH_USER]({ commit }) {
    const user = await webApi.$webApi;
    commit(MUTATIONS.SET_SEARCH_MY_REPORT, user);
  }
};

export { ACTIONS };
export default actions;
