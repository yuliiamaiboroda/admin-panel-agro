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

export const createService = createAsyncThunk<
  IService,
  {
    title: string;
    description: string;
    image: File;
    price: string;
    contactMail: string;
    contactPhone: string;
  },
  { rejectValue: string }
>(
  'services/create',
  async (
    { title, description, image, price, contactMail, contactPhone },
    thunkApi
  ) => {
    try {
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
      const error = err as AxiosError;
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteService = createAsyncThunk(
  'services/delete',
  async (_id : string) => {
    try {
      await axios.delete(`/api/services/${_id}`, {
      });
    } catch (err : any) {
      const error = err?.message
      return error
    }
  }
);
