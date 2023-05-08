import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
// import { RootState } from 'redux/store';

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

axios.defaults.baseURL = 'https://ahrokhimpromtsentr.cyclic.app';

const setToken = (token: string) => {
  axios.defaults.headers.authorization = `Bearer ${token}`;
};

// const removeToken = () => {
//   axios.defaults.headers.authorization = '';
// };

export const loginUser = createAsyncThunk<
  IUser,
  { email: string; password: string },
  { rejectValue: string }
>('loginUser', async (userCredentials, thunkApi) => {
  try {
    const { data } = await axios.post<IUser>(
      '/api/users/login',
      userCredentials
    );
    setToken(data.accessToken);
    return data;
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
  }
});

// TODO:  Create extra fields on backend or new route to fetch user

// export const refreshUser = createAsyncThunk<
//   IUser,
//   undefined,
//   { rejectValue: string; state: RootState }
// >('refreshUser', async (_, thunkApi) => {
//   const { user } = thunkApi.getState();
//   if (!user.refreshToken) {
//     return thunkApi.rejectWithValue('Unable to refresh user');
//   }
//   setToken(user.refreshToken);
//   try {
//     const { data } = await axios.post<IUser>('/api/users/refresh');
//     setToken(data.accessToken);
//     return data;
//   } catch (err) {
//     const error = err as AxiosError;
//     return thunkApi.rejectWithValue(error.message);
//   }
// });
