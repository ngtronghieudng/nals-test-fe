import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TheLayout from '@/layouts/TheLayout.vue';
import { loadView } from '@/services/lazy-load.service';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: TheLayout,
    children: [
      {
        path: '/blog-list',
        name: 'BlockList',
        component: loadView('BlogList'),
      },
      {
        path: '/blog-detail/:id',
        name: 'BlockDetail',
        component: loadView('BlogDetail'),
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
