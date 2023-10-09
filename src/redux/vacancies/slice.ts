import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createVacancy,
  getCertainVacancy,
  getVacanciesByCategories,
  removeVacancyById,
  updateVacancyById,
  getAllVacancyTitles,
} from './operations';
import { Categories } from 'helpers/constants';

export interface IVacancy {
  id: string;
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

export interface IVacancyTitle {
  id: string;
  title: string;
}

interface IState {
  entities: IVacancy[];
  titles: IVacancyTitle[];
  isLoading: boolean;
  isListLoading: boolean;
  certain: IVacancy | null;
  error: string | null;
}

const initialState: IState = {
  entities: [],
  titles: [],
  isLoading: false,
  isListLoading: false,
  error: null,
  certain: null,
};

const vacanciesPendingReducer = (state: IState) => {
  return { ...state, isLoading: true, error: null };
};

const vacanciesListPendingReducer = (state: IState) => {
  return { ...state, isLoading: true, isListLoading: true, error: null };
};

const vacanciesRejectedReducer = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    ...(action.payload ? { error: action.payload } : null),
  };
};

const getVacanciesFulfilledReducer = (
  state: IState,
  action: PayloadAction<IVacancy[], string>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    entities: action.payload,
  };
};

const removeVacancyByIdFulfilledReducer = (
  state: IState,
  action: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    entities: state.entities.filter(item => item.id !== action.payload),
  };
};

const createVacancyFulfilledReducer = (
  state: IState,
  action: PayloadAction<IVacancy, string>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    entities: [...state.entities, action.payload],
  };
};

const updateVacancyFulfilledReducer = (
  state: IState,
  action: PayloadAction<IVacancy, string>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    entities: state.entities.map(item => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          id: action.payload.id,
          category: action.payload.category,
          title: action.payload.title,
          description: action.payload.description,
          sallary: action.payload.sallary,
          education: action.payload.education,
          contactMail: action.payload.contactMail,
          contactPhone: action.payload.contactPhone,
          workExperienceRequired: action.payload.workExperienceRequired,
          location: action.payload.location,
        };
      }
      return item;
    }),
    ...(state.certain ? { certain: action.payload } : null),
  };
};

const getCertainFulfilledReducer = (
  state: IState,
  action: PayloadAction<IVacancy, string>
) => {
  return {
    ...state,
    isLoading: false,
    certain: action.payload,
  };
};

const getAllVacancyTitlesFulfilledReducer = (
  state: IState,
  action: PayloadAction<IVacancyTitle[], string>
) => {
  return { ...state, isLoading: false, titles: action.payload };
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    removeCertainVacancy(state) {
      return { ...state, certain: null };
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getVacanciesByCategories.pending, vacanciesListPendingReducer)
      .addCase(getVacanciesByCategories.fulfilled, getVacanciesFulfilledReducer)
      .addCase(getVacanciesByCategories.rejected, vacanciesRejectedReducer)
      .addCase(removeVacancyById.pending, vacanciesPendingReducer)
      .addCase(removeVacancyById.fulfilled, removeVacancyByIdFulfilledReducer)
      .addCase(removeVacancyById.rejected, vacanciesRejectedReducer)
      .addCase(createVacancy.pending, vacanciesPendingReducer)
      .addCase(createVacancy.fulfilled, createVacancyFulfilledReducer)
      .addCase(createVacancy.rejected, vacanciesRejectedReducer)
      .addCase(updateVacancyById.pending, vacanciesPendingReducer)
      .addCase(updateVacancyById.fulfilled, updateVacancyFulfilledReducer)
      .addCase(updateVacancyById.rejected, vacanciesRejectedReducer)
      .addCase(getCertainVacancy.pending, vacanciesPendingReducer)
      .addCase(getCertainVacancy.fulfilled, getCertainFulfilledReducer)
      .addCase(getCertainVacancy.rejected, vacanciesRejectedReducer)
      .addCase(getAllVacancyTitles.pending, vacanciesPendingReducer)
      .addCase(
        getAllVacancyTitles.fulfilled,
        getAllVacancyTitlesFulfilledReducer
      )
      .addCase(getAllVacancyTitles.rejected, vacanciesRejectedReducer),
});

export const vacanciesReducer = vacanciesSlice.reducer;
export const { removeCertainVacancy } = vacanciesSlice.actions;
