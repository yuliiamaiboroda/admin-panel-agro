import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IVacancy } from './slice';
import { Categories } from 'helpers/constants';

interface INewVacancy {
  category: keyof typeof Categories;
  title: string;
  description: string;
  sallary: string;
  education: string;
  contactMail: string;
  contactPhone: string;
  workExperienceRequired: string;
  location: string;
}

export const getVacanciesByCategories = createAsyncThunk<
  IVacancy[],
  string,
  { rejectValue: string }
>('vacancies/getListByCategory', async (categoryName, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/vacancies/category/${categoryName}`);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
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
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
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
      const error = err as AxiosError<{ message: string }>;
      if (!error.response) {
        return thunkApi.rejectWithValue('Something went wrong');
      }
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateVacancyById = createAsyncThunk<
  IVacancy,
  IVacancy,
  {
    rejectValue: string;
  }
>(
  'vacancies/updateById',
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
      _id,
    },
    thunkApi
  ) => {
    try {
      const { data } = await axios.put(`/api/vacancies/${_id}`, {
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
      const error = err as AxiosError<{ message: string }>;
      if (!error.response) {
        return thunkApi.rejectWithValue('Something went wrong');
      }
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getCertainVacancy = createAsyncThunk<
  IVacancy,
  string,
  {
    rejectValue: string;
  }
>('vacancies/getCertain', async (_id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/vacancies/certain/${_id}`);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
