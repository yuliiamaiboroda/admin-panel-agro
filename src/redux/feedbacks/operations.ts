import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Notify } from 'notiflix';
import { IFeedback, IFeedbackCertain, IFeedbackPagination } from './slice';

export const getAllFeedback = createAsyncThunk<
  { feedbacks: IFeedback[]; pagination: IFeedbackPagination },
  { [x: string]: string },
  { rejectValue: string }
>('feedback/getAll', async (params, thunkApi) => {
  try {
    const {
      data: { feedbacks, ...pagination },
    } = await axios.get('/api/feedback/all', { params });
    return { feedbacks, pagination };
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
