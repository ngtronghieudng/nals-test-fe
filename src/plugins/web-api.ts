import axios from 'axios';
import BlogsApi from '@/apis/blogs-api';
import _Vue from 'vue';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const blogsApi = new BlogsApi(instance);

const webApi = {
  blogsApi: blogsApi
};

const webApiPlugin = {
  install(Vue: typeof _Vue) {
    Vue.prototype.$webApi = webApi;
  }
};

export default webApiPlugin;
