import axios from 'axios';
import { store } from 'redux/store';
import Cookies from 'universal-cookie';
import { refreshToken, refreshTokenError } from 'redux/user';

const cookies = new Cookies();

const setCookie = (cookie: string) => {
  cookies.set('jwt', cookie);
};

const removeCookie = () => {
  cookies.remove('jwt');
};

// axios.defaults.baseURL = 'https://ahrokhimpromtsentr.cyclic.app';
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

export const privateAxios = axios.create({
  baseURL: 'http://localhost:3001',
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
          setCookie(document.cookie);
          store.dispatch(refreshToken(data.accessToken));
          return axios(originalConfig);
        } catch (err) {
          removeCookie();
          store.dispatch(refreshTokenError());
          // return Promise.reject(err);
        }
      }
    }
    return Promise.reject(error);
  }
);
