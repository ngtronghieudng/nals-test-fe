import webApiPlugin, { webApi } from '@/plugins/web-api';

// declare module 'vue/types/vue' {
//   interface Vue {
//     $webApi: typeof webApiPlugin;
//   }
//   interface VueConstructor {
//     $webApi: typeof webApiPlugin;
//   }
// }

// declare module 'vuex/types/index' {
//   interface Store<S> {
//     $webApi: typeof webApi
//   }
// }

declare module 'vue/types/vue' {
  interface Vue {
    $webApi: typeof webApiPlugin;
  }
  interface VueConstructor {
    $webApi: typeof webApiPlugin;
  }
}
