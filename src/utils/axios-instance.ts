import axios from 'axios';
import { store } from 'redux/store';
import { refreshToken, refreshTokenError } from 'redux/auth';

axios.defaults.baseURL = 'https://ahrokhimpromtsentr.cyclic.app';
// axios.defaults.baseURL = 'http://localhost:5050';
axios.defaults.withCredentials = true;

export const privateAxios = axios.create({
  // baseURL: 'https://ahrokhimpromtsentr.cyclic.app',
  baseURL: 'http://localhost:5050',
  withCredentials: true,
});

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${
      store.getState().userData.accessToken
    }`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalConfig = error.config;
    if (originalConfig.url !== '/api/users/login' && error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const { data } = await privateAxios.post<{ accessToken: string }>(
            '/api/users/refresh'
          );
          originalConfig.headers.Authorization = `Bearer ${data.accessToken}`;
          store.dispatch(refreshToken(data.accessToken));
          return axios(originalConfig);
        } catch (err) {
          store.dispatch(refreshTokenError());
          return Promise.reject(err);
        }
      }
    }
    return Promise.reject(error);
  }
);
