import { GetterTree } from 'vuex';
import { State } from './state';

const GETTERS = {
  GET_BLOGS: 'getBlogs'
};

const getters: GetterTree<State, State> = {
  [GETTERS.GET_BLOGS](state) {
    return state.blogs;
  }
};

export { GETTERS };
export default getters;
