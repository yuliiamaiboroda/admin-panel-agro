import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { IProduct, IProductData } from 'helpers/types';
import { createFormData } from 'utils';

export const getAllProducts = createAsyncThunk<
  IProduct[],
  undefined,
  { rejectValue: string }
>('products/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/products');
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const getCertainProduct = createAsyncThunk<
  IProduct,
  string,
  { rejectValue: string }
>('products/getCertainProduct', async (id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
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
>('products/createProduct', async (productData, thunkApi) => {
  try {
    if (!productData.image) {
      return thunkApi.rejectWithValue('File should be uploaded');
    }
    const reqBody = createFormData(productData);
    const { data } = await axios.put('/api/products', reqBody, {
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
  { id: string } & IProductData,
  { rejectValue: string }
>('products/editProduct', async ({ id, ...productData }, thunkApi) => {
  try {
    const reqBody = createFormData(productData);
    const { data } = await axios.post(`/api/products/${id}`, reqBody, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const removeProduct = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('products/removeProduct', async (id, thunkApi) => {
  try {
    await axios.delete(`/api/products/${id}`);
    return id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
