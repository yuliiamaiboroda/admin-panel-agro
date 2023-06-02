import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Notify } from 'notiflix';
import { IFeedback } from './slice';

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
