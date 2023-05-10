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

export const createProduct = createAsyncThunk<
  IProduct,
  { title: string; description: string; image: FileList },
  { rejectValue: string }
>('products/createProduct', async (product, thunkApi) => {
  try {
    const { data } = await axios.post('/api/products/all', product, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  } catch (err) {
    const error = err as AxiosError;
    thunkApi.rejectWithValue(error.message);
  }
});
