import { createSlice } from '@reduxjs/toolkit';
import {
  createVacancy,
  getCertainVacancy,
  getVacanciesByCategories,
  removeVacancyById,
  updateVacancyById,
  getAllVacancyTitles,
} from './operations';
import type { IVacancyState } from 'helpers/types';
import * as vacancies from './reducers';

export const initialState: IVacancyState = {
  entities: [],
  titles: [],
  isLoading: false,
  isListLoading: false,
  error: null,
  certain: null,
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    removeCertainVacancy: vacancies.removeCertainVacancyReducer,
  },
  extraReducers: builder =>
    builder
      .addCase(getVacanciesByCategories.pending, vacancies.pendingListReducer)
      .addCase(
        getVacanciesByCategories.fulfilled,
        vacancies.getVacanciesReducer
      )
      .addCase(getVacanciesByCategories.rejected, vacancies.rejectedReducer)
      .addCase(removeVacancyById.pending, vacancies.pendingReducer)
      .addCase(removeVacancyById.fulfilled, vacancies.removeVacancyByIdReducer)
      .addCase(removeVacancyById.rejected, vacancies.rejectedReducer)
      .addCase(createVacancy.pending, vacancies.pendingReducer)
      .addCase(createVacancy.fulfilled, vacancies.createVacancyReducer)
      .addCase(createVacancy.rejected, vacancies.rejectedReducer)
      .addCase(updateVacancyById.pending, vacancies.pendingReducer)
      .addCase(updateVacancyById.fulfilled, vacancies.updateVacancyReducer)
      .addCase(updateVacancyById.rejected, vacancies.rejectedReducer)
      .addCase(getCertainVacancy.pending, vacancies.pendingReducer)
      .addCase(getCertainVacancy.fulfilled, vacancies.getCertainReducer)
      .addCase(getCertainVacancy.rejected, vacancies.rejectedReducer)
      .addCase(getAllVacancyTitles.pending, vacancies.pendingReducer)
      .addCase(
        getAllVacancyTitles.fulfilled,
        vacancies.getAllVacancyTitlesReducer
      )
      .addCase(getAllVacancyTitles.rejected, vacancies.rejectedReducer),
});

export const vacanciesReducer = vacanciesSlice.reducer;
export const { removeCertainVacancy } = vacanciesSlice.actions;
