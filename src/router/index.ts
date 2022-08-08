import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';
import { loadView } from '@/services/lazy-load.service';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '/blogs',
        name: 'BlockList',
        component: loadView('Blogs'),
      },
      {
        path: '/blog-detail/:id',
        name: 'BlockDetail',
        component: loadView('BlogsDetail'),
      },
      {
        path: '/create-blog',
        name: 'CreateBlog',
        component: loadView('CreateBlog'),
      },
      {
        path: '/edit-blog/:id',
        name: 'EditBlog',
        component: loadView('EditBlog'),
      },
      {
        path: '/',
        name: 'Welcome',
        component: loadView('Welcome'),
      },
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
  routes,
  linkExactActiveClass: 'active',
});

export default router;
