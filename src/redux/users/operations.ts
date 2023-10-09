import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { IUser } from 'helpers/types';

export const getAllUsers = createAsyncThunk<
  IUser[],
  undefined,
  { rejectValue: string }
>('users/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/users');
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
>('users/removeById', async (id, thunkApi) => {
  try {
    await axios.delete(`/api/users/${id}`);
    return id;
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
      const { data } = await axios.put('/api/users', {
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
  async ({ email, name, surname, role, id, password }, thunkApi) => {
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

      const { data } = await axios.post(`/api/users/${id}`, requestBody);
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
>('users/getCertain', async (id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
