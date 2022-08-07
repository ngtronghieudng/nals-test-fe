import { GetterTree } from 'vuex';
import { State } from './state';

const GETTERS = {
  HIEU_GETTERS: 'hieugetters'
};

const getters: GetterTree<State, State> = {
  [GETTERS.HIEU_GETTERS](state) {
    return state.hieuState;
  }
};

export { GETTERS };
export default getters;
