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

export const updatePasswordById = createAsyncThunk<
  string,
  { oldPassword: string; newPassword: string },
  {
    rejectValue: string;
  }
>('users/updatePassword', async ({ oldPassword, newPassword }, thunkApi) => {
  try {
    let requestBody = { oldPassword, newPassword };

    const { data } = await axios.post(`/api/auth/update-password`, requestBody);
    Notify.success(data);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const restorePasswordViaEmail = createAsyncThunk<
  undefined,
  string,
  {
    rejectValue: string;
  }
>('user/restore', async (email, thunkApi) => {
  try {
    await axios.post('/api/auth/restore-password', { email });

    Notify.success('Пароль успішно надіслано по пошті');
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;

    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    Notify.failure(error.response.data.message);
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
