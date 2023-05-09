import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { IService } from './slice';

export const getAllServices = createAsyncThunk<
  IService[],
  undefined,
  { rejectValue: string }
>('services/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/services/getAll');
    return data;
  } catch (err) {
    const error = err as AxiosError;
    thunkApi.rejectWithValue(error.message);
  }
});
