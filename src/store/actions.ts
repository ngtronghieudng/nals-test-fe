import { ActionTree } from 'vuex';
import { MUTATIONS } from './mutations';
import { State } from './state';
import { } from '@/apis/blogs-api';

const ACTIONS = {
  FETCH_BLOGS: 'fetchBlogs'
};

const actions: ActionTree<State, State> = {
  // async [ACTIONS.FETCH_BLOGS]({ commit }, params) {
  //   const response = await BlogsApi.getBlogList(params);
  //   commit(MUTATIONS.SET_BLOGS, response);
  // }
};

export { ACTIONS };
export default actions;
