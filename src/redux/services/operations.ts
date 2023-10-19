import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { IService, IServiceData } from 'helpers/types';
import { createFormData } from 'utils';

export const getAllServices = createAsyncThunk<
  IService[],
  undefined,
  { rejectValue: string }
>('services/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/services/');
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
>('services/getCertain', async (id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/services/${id}`);
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
>('services/create', async (serviceData, thunkApi) => {
  try {
    if (!serviceData.image) {
      return thunkApi.rejectWithValue('File should be uploaded');
    }
    const reqBody = createFormData(serviceData);
    const { data } = await axios.put('/api/services/', reqBody, {
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
});

export const deleteService = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('services/delete', async (id, thunkApi) => {
  try {
    await axios.delete(`/api/services/${id}`);
    return id;
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
    id: string;
  } & IServiceData,
  { rejectValue: string }
>('services/update', async ({ id, ...serviceData }, thunkApi) => {
  try {
    const reqBody = createFormData(serviceData);

    const { data } = await axios.post(`/api/services/${id}`, reqBody, {
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
});
