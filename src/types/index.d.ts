import webApiPlugin from '@/plugins/web-api';

declare module 'vue/types/vue' {
  interface Vue {
    $webApi: typeof webApiPlugin;
  }
  interface VueConstructor {
    $webApi: typeof webApiPlugin;
  }
}

// declare module 'vuex/types/index' {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   interface Store<S> {
//     $socket: typeof socket
//   }
// }
