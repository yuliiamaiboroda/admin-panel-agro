import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IVacancy, IVacancyTitle, IVacancyData } from 'helpers/types';

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
>('vacancies/removeById', async (id, thunkApi) => {
  try {
    await axios.delete(`api/vacancies/${id}`);
    return id;
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
  IVacancyData,
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
      id,
    },
    thunkApi
  ) => {
    try {
      const { data } = await axios.put(`/api/vacancies/${id}`, {
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
>('vacancies/getCertain', async (id, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/vacancies/certain/${id}`);
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const getAllVacancyTitles = createAsyncThunk<
  IVacancyTitle[],
  undefined,
  { rejectValue: string }
>('vacancies/getTittles', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/api/vacancies/titles');
    return data;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    if (!error.response) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
