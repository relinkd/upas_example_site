import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { camelize, decamelize } from 'shared/lib';

interface AxiosInstanceTyped extends AxiosInstance {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T = any>(config: AxiosRequestConfig<any>): Promise<AxiosResponse<T>>;
}

const client: AxiosInstanceTyped = axios.create({
  baseURL: ``,
  responseType: 'json' as const,
  headers: {
    'Content-Type': 'application/json',
  },
});
client.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return {
      ...config,
      transformRequest: (request) => {
        return JSON.stringify(decamelize(request));
      },
      paramsSerializer: {
        serialize: (params) => {
          return new URLSearchParams(decamelize(params)).toString();
        },
      },
      transformResponse: (response) => {
        return camelize(JSON.parse(response));
      },
    };
  },
  (error) => {
    console.log('error', error);
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log({
      error,
      'Request failed': error.config,
    });

    if (error.response) {
      console.error(error.response);
    } else {
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error);
  },
);

export default client;
