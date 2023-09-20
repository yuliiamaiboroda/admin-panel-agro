import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IFeedback, IFeedbackCertain, IFeedbackPagination } from './slice';
import type { IFeedbackFilter } from 'helpers/types';

export const getAllFeedback = createAsyncThunk<
  { feedbacks: IFeedback[]; pagination: IFeedbackPagination },
  IFeedbackFilter,
  { rejectValue: string }
>('feedback/getAll', async (params, thunkApi) => {
  try {
    const {
      data: { feedbacks, ...pagination },
    } = await axios.get('/api/feedback/all', { params });
    return { feedbacks, pagination };
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
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
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
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
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
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
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const updateFeedbackIsFavorite = createAsyncThunk<
  string,
  string,
  {
    rejectValue: string;
  }
>('feedback/updateFeedbackFavorite', async (_id, thunkApi) => {
  try {
    await axios.patch(`/api/feedback/favorite/${_id}`);
    return _id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const loadMoreFeedbacks = createAsyncThunk<
  { feedbacks: IFeedback[]; pagination: IFeedbackPagination },
  IFeedbackFilter,
  { rejectValue: string }
>('feedback/loadMoreFeedbacks', async (params, thunkApi) => {
  try {
    const {
      data: { feedbacks, ...pagination },
    } = await axios.get('/api/feedback/all', { params });
    return { feedbacks, pagination };
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
