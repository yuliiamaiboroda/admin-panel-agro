import { createSlice } from '@reduxjs/toolkit';
import { getAllVacancies } from './operations';

export interface IVacancy {
  _id: string;
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

interface IState {
  entities: IVacancy[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  entities: [],
  isLoading: false,
  error: null,
};
const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllVacancies.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(getAllVacancies.fulfilled, (state, { payload }) => {
        return { ...state, isLoading: false, entities: payload };
      })
      .addCase(getAllVacancies.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          ...(payload ? { error: payload } : null),
        };
      }),
});

export const vacanciesReducer = vacanciesSlice.reducer;
