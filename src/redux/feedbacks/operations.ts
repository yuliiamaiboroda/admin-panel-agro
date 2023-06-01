import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Notify } from 'notiflix';
import { IFeedback, IFeedbackCertain } from './slice';

export const getAllFeedback = createAsyncThunk<
  IFeedback[],
  undefined,
  { rejectValue: string }
>('feedback/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/feedback/all');
    return data.feedbacks;
  } catch (err) {
    const error = err as AxiosError;
    Notify.failure(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const removeFeedbackById = createAsyncThunk<
  string,
  string,
  {
    rejectValue: string;
  }
>('feedback/removeById', async (_id, thunkApi) => {
  try {
    await axios.delete(`/api/feedback/${_id}`);
    return _id;
  } catch (err) {
    const error = err as AxiosError;
    Notify.failure(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateFeedbackViews = createAsyncThunk<
  string,
  string,
  {
    rejectValue: string;
  }
>('feedback/updateViews', async (_id, thunkApi) => {
  try {
    await axios.patch(`/api/feedback/${_id}`);
    return _id;
  } catch (err) {
    const error = err as AxiosError;
    Notify.failure(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getCertainFeedback = createAsyncThunk<
  IFeedbackCertain,
  string,
  {
    rejectValue: string;
  }
>('feedback/certain', async (_id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/feedback/${_id}`);
    return data;
  } catch (err) {
    const error = err as AxiosError;
    Notify.failure(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});
