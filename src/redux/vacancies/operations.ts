import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IVacancy } from './slice';

export const getAllVacancies = createAsyncThunk<
  IVacancy[],
  undefined,
  { rejectValue: string }
>('vacancies/getAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/vacancies/all');
    return data;
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
  }
});
