export const loadView = (view: string): any => {
  return () => import(/* webpackChunkName: "views/[request]" */ `@/views/${view}.vue`);
};

export const loadLayout = (layout: string): any => {
  return () => import(/* webpackChunkName: "layouts/[request]" */ `@/layouts/${layout}.vue`);
};

export const loadComponent = (component: string): any => {
  return () => import(/* webpackChunkName: "components/[request]" */ `@/components/${component}.vue`);
};
