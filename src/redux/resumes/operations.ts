import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IResume, IResumeResponse, IResumeFilter } from 'helpers/types';

export const getAllResumes = createAsyncThunk<
  IResumeResponse,
  IResumeFilter | undefined,
  { rejectValue: string }
>('resumes/getAllResumes', async (params, thunkApi) => {
  try {
    const {
      data: { resumes, ...pagination },
    } = await axios.get('/api/resumes/', {
      params,
    });
    return { resumes, pagination };
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const loadMoreResumes = createAsyncThunk<
  IResumeResponse,
  IResumeFilter,
  { rejectValue: string }
>('resumes/loadMoreResumes', async (params, thunkApi) => {
  try {
    const {
      data: { resumes, ...pagination },
    } = await axios.get('/api/resumes', {
      params,
    });
    return { resumes, pagination };
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const getCertainResume = createAsyncThunk<
  IResume,
  string,
  { rejectValue: string }
>('resumes/getCertainResume', async (id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/resumes/${id}`);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const removeResume = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('resumes/removeResume', async (id, thunkApi) => {
  try {
    await axios.delete(`/api/resumes/${id}`);
    return id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const updateResumeViews = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('resumes/updateResumeViews', async (id, thunkApi) => {
  try {
    await axios.post(`/api/resumes/${id}/views`);
    return id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const updateResumeIsFavorite = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('resumes/updateResumeFavorite', async (id, thunkApi) => {
  try {
    await axios.post(`/api/resumes/${id}/favorite`);
    return id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
