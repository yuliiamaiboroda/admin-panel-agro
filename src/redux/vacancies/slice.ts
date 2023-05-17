import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createVacancy,
  getActualVacancies,
  getAllVacancies,
  removeVacancyById,
} from './operations';

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

const vacanciesPendingReducer = (state: IState) => {
  return { ...state, isLoading: true, error: null };
};

const vacanciesRejectedReducer = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  return {
    ...state,
    isLoading: false,
    ...(action.payload ? { error: action.payload } : null),
  };
};

const getAllVacanciesFulfilledReducer = (
  state: IState,
  action: PayloadAction<IVacancy[], string>
) => {
  return { ...state, isLoading: false, entities: action.payload };
};

const removeVacancyByIdFulfilledReducer = (
  state: IState,
  action: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.filter(item => item._id !== action.payload),
  };
};

const createVacancyFulfilledReducer = (
  state: IState,
  action: PayloadAction<IVacancy, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: [...state.entities, action.payload],
  };
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllVacancies.pending, vacanciesPendingReducer)
      .addCase(getAllVacancies.fulfilled, getAllVacanciesFulfilledReducer)
      .addCase(getAllVacancies.rejected, vacanciesRejectedReducer)
      .addCase(removeVacancyById.pending, vacanciesPendingReducer)
      .addCase(removeVacancyById.fulfilled, removeVacancyByIdFulfilledReducer)
      .addCase(removeVacancyById.rejected, vacanciesRejectedReducer)
      .addCase(createVacancy.pending, vacanciesPendingReducer)
      .addCase(createVacancy.fulfilled, createVacancyFulfilledReducer)
      .addCase(createVacancy.rejected, vacanciesRejectedReducer)
      .addCase(getActualVacancies.pending, vacanciesPendingReducer)
      .addCase(getActualVacancies.fulfilled, getAllVacanciesFulfilledReducer)
      .addCase(getActualVacancies.rejected, vacanciesRejectedReducer),
});

export const vacanciesReducer = vacanciesSlice.reducer;
