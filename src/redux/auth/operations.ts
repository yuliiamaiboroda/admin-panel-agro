import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Notify } from 'notiflix';
import type { IAuth } from 'helpers/types';
import { RootState } from 'redux/store';

export const loginUser = createAsyncThunk<
  IAuth,
  { email: string; password: string },
  { rejectValue: string }
>('user/loginUser', async (userCredentials, thunkApi) => {
  try {
    const { data } = await axios.post<IAuth>(
      '/api/auth/login',
      userCredentials
    );
    return data;
  } catch (err) {
    const error = err as AxiosError;
    Notify.failure(
      "Змініть адресу електронної пошти або ім'я та повторіть спробу"
    );
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('users/logoutUser', async (_, thunkApi) => {
  try {
    await axios.post('/api/auth/logout');
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk<
  IAuth['user'],
  undefined,
  { rejectValue: string; state: RootState }
>('users/current', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/auth/current-user');

    return data;
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
  }
});
