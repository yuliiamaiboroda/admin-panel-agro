import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IResume } from './slice';

export const getAllResumes = createAsyncThunk<
  IResume[],
  undefined,
  { rejectValue: string }
>('resumes/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/resume/all');
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
