import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { IProduct } from './slice';

export const getAllProducts = createAsyncThunk<
  IProduct[],
  undefined,
  { rejectValue: string }
>('products/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/products/all');
    return data;
  } catch (err) {
    const error = err as AxiosError;
    thunkApi.rejectWithValue(error.message);
  }
});
