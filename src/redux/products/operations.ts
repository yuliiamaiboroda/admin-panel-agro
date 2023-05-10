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
  { title: string; description: string; image: File },
  { rejectValue: string }
>('products/createProduct', async ({ title, description, image }, thunkApi) => {
  try {
    const reqBody = new FormData();
    reqBody.append('title', title);
    reqBody.append('description', description);
    reqBody.append('image', image);
    const { data } = await axios.post('/api/products/certain', reqBody, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (!data) {
      thunkApi.rejectWithValue(
        "Something went wrong... Response doesn't return product"
      );
    }
    return data;
  } catch (err) {
    const error = err as AxiosError;
    thunkApi.rejectWithValue(error.message);
  }
});
