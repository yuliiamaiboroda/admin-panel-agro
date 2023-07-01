import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Notify } from 'notiflix';
import type { Roles } from 'helpers/constants';
import type { RootState } from 'redux/store';

interface IUser {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
    surname: string;
    role: keyof typeof Roles;
  };
}

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
    return data;
  } catch (err) {
    const error = err as AxiosError;
    Notify.failure('Please change your email or name and try again');
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('users/logoutUser', async (_, thunkApi) => {
  try {
    await axios.post('/api/users/logout');
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk<
  IUser['user'],
  undefined,
  { rejectValue: string; state: RootState }
>('users/current', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/users/current');

    return data;
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
  }
});
