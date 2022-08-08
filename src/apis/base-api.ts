import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { Message } from 'element-ui';
// import { AuthModule } from '@/store/modules/auth';
// import { AppModule } from '@/store/modules/app';
import router from '@/router/index';

const IGNORE_SHOW_ERROR_MESSAGE = [422];

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 600000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// export interface ErrorMessage {
//   message: string;
//   errors?: [string];
//   statusCode?: number;
// }

const HandlingError = (error: AxiosError) => {
  let messageErr: any;
  if (error.response) {
    messageErr = error.response.data;
    // if (messageErr.status_code && !IGNORE_SHOW_ERROR_MESSAGE.includes(messageErr.status_code)) {
    //   Message.error(messageErr.message);
    // }
    if (messageErr.statusCode === 404) {
      // || messageErr.status_code === 403
      router.push({ name: 'PageNotFound' });
    }
    if (messageErr.statusCode === 401) {
      router.push({ name: 'LoginScreen' });
    }
  } else {
    messageErr = { message: error.message };
  }
  return messageErr;
};

const makeRequest = (params: Record<string, any> = {}): AxiosRequestConfig => {
  let headers = {};
  for (const propName in params) {
    if (params[propName] === null || params[propName] === undefined || !params[propName]) {
      delete params[propName];
    }

    if (propName === 'headers') {
      headers = params[propName];
      delete params[propName];
    }
  }

  const opts: any = {
    params: params
  };

  if (headers) {
    opts.headers = headers;
  }

  return opts;
};

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    // if (AuthModule.token) {
    //   config.headers['Authorization'] = `Bearer ${AuthModule.token}`;
    // }
    // config.headers['language'] = AppModule.language;

    // if (config.method === 'put' && config.data instanceof FormData) {
    //   config.method = 'post';
    //   config.data.append('_method', 'put');
    // }

    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (err: AxiosError) => {
    return Promise.reject(HandlingError(err));
  }
);

export default {
  get(path: string, params = {}): Promise<any> {
    const request = makeRequest(params);
    return service.get(path, request);
  },
  post(path: string, data = {}, config: AxiosRequestConfig = {}): Promise<any> {
    const request = makeRequest(config);
    return service.post(path, data, request);
  },
  put(path: string, data = {}, params = {}) {
    const request = makeRequest(params);
    return service.put(path, data, request);
  },
  delete(path: string, params = {}) {
    const request = makeRequest(params);
    return service.delete(path, request);
  }
};
