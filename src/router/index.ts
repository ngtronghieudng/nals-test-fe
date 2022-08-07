import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';
import Blogs from '@/views/Blogs.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '/blogs',
        component: Blogs
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
