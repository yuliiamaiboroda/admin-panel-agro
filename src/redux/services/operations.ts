import { createAsyncThunk } from '@reduxjs/toolkit';
import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
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
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteService = createAsyncThunk(
  //  TODO
  // <
  //   undefined,
  //   string,
  //   { rejectValue: string }
  // >
  'services/delete',
  async (
    _id: string
    // thunkApi
  ) => {
    try {
      await axios.delete(`/api/services/${_id}`);
      return _id;
    } catch (err: any) {
      const { message } = err?.response?.data;
      console.log('error.message >>>', message);
      return message;

      // const error = err as AxiosError;
      // console.log('error', error)
      // if (error.response?.data.message) {
      //   const {message} = error.response?.data
      //   return thunkApi.rejectWithValue(message);
      // }
    }
  }
);
