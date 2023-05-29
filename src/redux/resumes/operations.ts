import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IResume, IResumeEntity, IResumePagination } from './slice';
import { createFormData } from 'utils';

export const getAllResumes = createAsyncThunk<
  { resumes: IResumeEntity[]; pagination: IResumePagination },
  { [x: string]: string },
  { rejectValue: string }
>('resumes/getAllResumes', async (params, thunkApi) => {
  try {
    const {
      data: { resumes, ...pagination },
    } = await axios.get('/api/resumes/all', {
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
>('resumes/getCertainResume', async (_id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/resumes/certain/${_id}`);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

interface IResumeData {
  name: string;
  phone: string;
  email: string;
  position: string;
  resume: File | null;
  comment: string;
  agreement: boolean;
}

export const createResume = createAsyncThunk<
  IResumeEntity,
  IResumeData,
  { rejectValue: string }
>('resumes/createResume', async (resumeData, thunkApi) => {
  try {
    if (!resumeData.resume) {
      return thunkApi.rejectWithValue('File should be uploaded');
    }
    const reqBody = createFormData(resumeData);
    const { data } = await axios.post('/api/resumes', reqBody, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    const { _id, name, position, comment } = data;
    return { _id, name, position, comment, isReviewed: false };
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
>('resumes/removeResume', async (_id, thunkApi) => {
  try {
    await axios.delete(`/api/resumes/certain/${_id}`);
    return _id;
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
>('resumes/updateResumeViews', async (_id, thunkApi) => {
  try {
    await axios.patch(`/api/resumes/certain/views/${_id}`);
    return _id;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
