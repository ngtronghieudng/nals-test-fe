import { AxiosInstance } from 'axios';

export class BaseApi {
  axios: AxiosInstance

  constructor(axios : AxiosInstance) {
    this.axios = axios;
  }
}
