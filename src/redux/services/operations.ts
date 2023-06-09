import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { IService } from './slice';

interface IServiceData {
  title: string;
  description: string;
  image: File | null;
  price: string;
  contactMail: string;
  contactPhone: string;
}

export const getAllServices = createAsyncThunk<
  IService[],
  undefined,
  { rejectValue: string }
>('services/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/services/getAll');
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const getCertainService = createAsyncThunk<
  IService,
  string,
  { rejectValue: string }
>('services/getCertain', async (_id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/services/${_id}`);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const createService = createAsyncThunk<
  IService,
  IServiceData,
  { rejectValue: string }
>(
  'services/create',
  async (
    { title, description, image, price, contactMail, contactPhone },
    thunkApi
  ) => {
    try {
      if (!image) {
        return thunkApi.rejectWithValue('File should be uploaded');
      }  
      const reqBody = new FormData();
      reqBody.append('title', title);
      reqBody.append('description', description);
      reqBody.append('image', image);
      reqBody.append('price', price);
      reqBody.append('contactMail', contactMail);
      reqBody.append('contactPhone', contactPhone);

      const { data } = await axios.post('/api/services/create', reqBody, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (!data) {
        thunkApi.rejectWithValue(
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
  }
);

export const deleteService = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('services/delete', async (_id, thunkApi) => {
  try {
    await axios.delete(`/api/services/${_id}`);
    return _id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const updateService = createAsyncThunk<
  IService,
  {
    _id: string;
  } & IServiceData,
  { rejectValue: string }
>(
  'services/update',
  async (
    { _id, title, description, image, price, contactMail, contactPhone },
    thunkApi
  ) => {
    try {
      const reqBody = new FormData();
      reqBody.append('title', title);
      reqBody.append('description', description);
      if (image) {
        reqBody.append('image', image);
      }
      reqBody.append('price', price);
      reqBody.append('contactMail', contactMail);
      reqBody.append('contactPhone', contactPhone);

      const { data } = await axios.patch(`/api/services/${_id}`, reqBody, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (!data) {
        thunkApi.rejectWithValue(
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
  }
);
