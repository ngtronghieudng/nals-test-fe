import { MutationTree } from 'vuex';
import { State } from './state';

const MUTATIONS = {
  SET_BLOGS: 'setBlogs'
};

const mutations: MutationTree<State> = {
  [MUTATIONS.SET_BLOGS](state, { data }) {
    state.blogs = data;
  }
};

export { MUTATIONS };
export default mutations;
