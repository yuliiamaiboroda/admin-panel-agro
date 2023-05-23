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
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
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
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
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
      const error = err as AxiosError;
      Notify.failure('something went wrong ');
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserById = createAsyncThunk<
  IUser,
  IUser,
  {
    rejectValue: string;
  }
>('users/updateById', async ({ email, name, surname, role, _id }, thunkApi) => {
  try {
    const { data } = await axios.patch(`/api/users/${_id}`, {
      email,
      name,
      surname,
      role,
    });
    return data;
  } catch (err) {
    const error = err as AxiosError;
    Notify.failure('something went wrong ');
    console.log(error);
    return thunkApi.rejectWithValue(error.message);
  }
});
