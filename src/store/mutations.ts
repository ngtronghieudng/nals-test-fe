import { MutationTree } from 'vuex';
import { State } from './state';

const MUTATIONS = {
  SET_SEARCH_MY_REPORT: 'setSearchMyReport'
};

const mutations: MutationTree<State> = {
  [MUTATIONS.SET_SEARCH_MY_REPORT](state, myReportFilter: any) {
    state.hieuState = myReportFilter;
  }
};

export { MUTATIONS };
export default mutations;
