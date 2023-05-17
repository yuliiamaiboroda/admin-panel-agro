import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { IProduct } from './slice';

interface IProductData {
  title: string;
  description: string;
  image: File | null;
}

export const getAllProducts = createAsyncThunk<
  IProduct[],
  undefined,
  { rejectValue: string }
>('products/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/products/all');
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const createProduct = createAsyncThunk<
  IProduct,
  IProductData,
  { rejectValue: string }
>('products/createProduct', async ({ title, description, image }, thunkApi) => {
  try {
    if (!image) {
      return thunkApi.rejectWithValue('File should be uploaded');
    }
    const reqBody = new FormData();
    reqBody.append('title', title);
    reqBody.append('description', description);
    reqBody.append('image', image);
    const { data } = await axios.post('/api/products/certain', reqBody, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (!data) {
      return thunkApi.rejectWithValue(
        "Something went wrong... Response doesn't return product"
      );
    }
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const editProduct = createAsyncThunk<
  IProduct,
  { _id: string } & IProductData,
  { rejectValue: string }
>(
  'products/editProduct',
  async ({ _id, title, description, image }, thunkApi) => {
    try {
      const reqBody = new FormData();
      reqBody.append('title', title);
      reqBody.append('description', description);
      if (image) {
        reqBody.append('image', image);
      }

      const { data } = await axios.patch(
        `/api/products/certain/${_id}`,
        reqBody,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
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
