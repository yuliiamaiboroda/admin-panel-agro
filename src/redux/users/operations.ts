import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IUser } from './slice';
import { Notify } from 'notiflix';

export const getAllUsers = createAsyncThunk<
  IUser[],
  undefined,
  { rejectValue: string }
>('users/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/users/getAllUser');
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const removeUserById = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('users/removeById', async (_id, thunkApi) => {
  try {
    await axios.delete(`/api/users/${_id}`);
    return _id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const registerNewUser = createAsyncThunk<
  IUser,
  {
    email: string;
    name: string;
    surname: string;
    role: string;
    password: string;
  },
  { rejectValue: string }
>(
  'users/register',
  async ({ email, name, surname, role, password }, thunkApi) => {
    try {
      const { data } = await axios.post('/api/users/register', {
        email,
        name,
        surname,
        role,
        password,
      });
      return data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      if (!error.response) {
        return thunkApi.rejectWithValue('Something went wrong');
      }
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserById = createAsyncThunk<
  IUser,
  { password: string | null } & IUser,
  {
    rejectValue: string;
  }
>(
  'users/updateById',
  async ({ email, name, surname, role, _id, password }, thunkApi) => {
    try {
      let requestBody;

      password
        ? (requestBody = { email, surname, role, name, password })
        : (requestBody = {
            email,
            surname,
            role,
            name,
          });

      const { data } = await axios.patch(`/api/users/${_id}`, requestBody);
      return data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      if (!error.response) {
        return thunkApi.rejectWithValue('Something went wrong');
      }
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getCertainUser = createAsyncThunk<
  IUser,
  string,
  {
    rejectValue: string;
  }
>('users/getCertain', async (_id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/users/certain/${_id}`);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
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

    const { data } = await axios.post(`/api/users/updatePassword`, requestBody);
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
