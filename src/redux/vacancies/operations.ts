import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IVacancy } from './slice';

interface INewVacancy {
  category: string;
  title: string;
  description: string;
  sallary: string;
  education: string;
  contactMail: string;
  contactPhone: string;
  workExperienceRequired: string;
  location: string;
}

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

export const removeVacancyById = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('vacancies/removeById', async (_id, thunkApi) => {
  try {
    await axios.delete(`api/vacancies/${_id}`);
    return _id;
  } catch (err) {
    const error = err as AxiosError;
    return thunkApi.rejectWithValue(error.message);
  }
});

export const createVacancy = createAsyncThunk<
  IVacancy,
  INewVacancy,
  { rejectValue: string }
>(
  'vacancies/create',
  async (
    {
      category,
      title,
      description,
      sallary,
      education,
      contactMail,
      contactPhone,
      workExperienceRequired,
      location,
    },
    thunkApi
  ) => {
    try {
      const { data } = await axios.post('/api/vacancies/create', {
        category,
        title,
        description,
        sallary,
        education,
        contactMail,
        contactPhone,
        workExperienceRequired,
        location,
      });
      return data;
    } catch (err) {
      const error = err as AxiosError;
      thunkApi.rejectWithValue(error.message);
    }
  }
);
