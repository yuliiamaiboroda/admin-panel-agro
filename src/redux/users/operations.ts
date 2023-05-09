import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IUser } from './slice';

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
    thunkApi.rejectWithValue(error.message);
  }
});

export const removeUserById = createAsyncThunk<
  any,
  IUser,
  { rejectValue: string }
>('users/removeById', async (user, thunkApi) => {
  try {
    await axios.delete(`/api/users/${user._id}`);
    return user;
  } catch (err) {
    const error = err as AxiosError;
    thunkApi.rejectWithValue(error.message);
  }
});
