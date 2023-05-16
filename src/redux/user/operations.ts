import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Notify } from 'notiflix';
import Cookies from 'universal-cookie';

interface IUser {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
    surname: string;
    role: string;
  };
}

interface IRefresh {
  accessToken: string;
  user: {
    email: string;
    name: string;
    surname: string;
    role: string;
  };
}

const cookies = new Cookies();

axios.defaults.baseURL = 'https://ahrokhimpromtsentr.cyclic.app';
axios.defaults.withCredentials = true;

const setCookie = (cookie: string) => {
  cookies.set('jwt', cookie);
};

const unsetCookie = () => {
  cookies.remove('jwt');
};

const setToken = (token: string) => {
  axios.defaults.headers.authorization = `Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.authorization = '';
};

export const loginUser = createAsyncThunk<
  IUser,
  { email: string; password: string },
  { rejectValue: string }
>('user/loginUser', async (userCredentials, thunkApi) => {
  try {
    const { data } = await axios.post<IUser>(
      '/api/users/login',
      userCredentials
    );
    setToken(data.accessToken);
    console.log(document.cookie);

    setCookie(document.cookie);
    return data;
  } catch (err) {
    const error = err as AxiosError;
    Notify.failure('Please change your email or name and try again');
    return thunkApi.rejectWithValue(error.message);
  }
});

// TODO:  Create extra fields on backend or new route to fetch user

export const logoutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('users/logoutUser', async (_, thunkApi) => {
  try {
    await axios.post('/api/users/logout');
    removeToken();
    unsetCookie();
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
  }
});

// export const fetchCurrentUser = createAsyncThunk<
//   IUser['user'],
//   undefined,
//   { rejectValue: string }
// >('users/current', async (_, thunkApi) => {
//   try {
//     const { data } = await axios.get('/api/users/current');
//     console.log(data);

//     return data;
//   } catch (err) {
//     const error = err as AxiosError;
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

export const refreshUser = createAsyncThunk<
  IRefresh,
  undefined,
  { rejectValue: string }
>('user/refreshUser', async (_, thunkApi) => {
  if (!cookies.get('jwt')) {
    return thunkApi.rejectWithValue('Unable to refresh user');
  }

  try {
    const { data } = await axios.post<IUser>('/api/users/refresh');
    setToken(data.accessToken);

    try {
      const { data: userData } = await axios.get('/api/users/current');
      return { accessToken: data.accessToken, user: userData };
    } catch (err) {
      const error = err as AxiosError;
      return thunkApi.rejectWithValue(error.message);
    }
  } catch (err) {
    const error = err as AxiosError;
    unsetCookie();
    return thunkApi.rejectWithValue(error.message);
  }
});
