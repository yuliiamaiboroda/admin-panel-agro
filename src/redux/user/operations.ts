import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

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

export const loginUser = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: string }
>('loginUser', async (userCredentials, thunkApi) => {
  try {
    const { data } = await axios.post<IUser>(
      'https://ahrokhimpromtsentr.cyclic.app/api/users/login',
      userCredentials
    );

    return data.accessToken;
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
  }
});
