import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IUser } from './slice';
import { Notify } from 'notiflix';

interface IReject {
  message: string | undefined;
  code: number | undefined;
}

export const getAllUsers = createAsyncThunk<
  IUser[],
  undefined,
  { rejectValue: IReject }
>('users/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/users/getAllUser');
    return data;
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response?.status,
    });
  }
});

export const removeUserById = createAsyncThunk<
  string,
  string,
  { rejectValue: IReject }
>('users/removeById', async (_id, thunkApi) => {
  try {
    await axios.delete(`/api/users/${_id}`);
    return _id;
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response?.status,
    });
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
  { rejectValue: IReject }
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
      return thunkApi.rejectWithValue({
        message: error.message,
        code: error.response?.status,
      });
    }
  }
);