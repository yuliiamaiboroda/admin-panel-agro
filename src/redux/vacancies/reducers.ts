import { PayloadAction } from '@reduxjs/toolkit';
import type { IVacancy, IVacancyState, IVacancyTitle } from 'helpers/types';

export const pendingReducer = (state: IVacancyState) => {
  return { ...state, isLoading: true, error: null };
};

export const pendingListReducer = (state: IVacancyState) => {
  return { ...state, isLoading: true, isListLoading: true, error: null };
};

export const rejectedReducer = (
  state: IVacancyState,
  { payload }: PayloadAction<string | undefined>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    ...(payload ? { error: payload } : null),
  };
};

export const removeCertainVacancyReducer = (state: IVacancyState) => ({
  ...state,
  certain: null,
});

export const getVacanciesReducer = (
  state: IVacancyState,
  { payload }: PayloadAction<IVacancy[], string>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    entities: payload,
  };
};

export const removeVacancyByIdReducer = (
  state: IVacancyState,
  { payload }: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    entities: state.entities.filter(item => item.id !== payload),
  };
};

export const createVacancyReducer = (
  state: IVacancyState,
  { payload }: PayloadAction<IVacancy, string>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    entities: [...state.entities, payload],
  };
};

export const updateVacancyReducer = (
  state: IVacancyState,
  { payload }: PayloadAction<IVacancy, string>
) => {
  return {
    ...state,
    isLoading: false,
    isListLoading: false,
    entities: state.entities.map(item => {
      if (item.id === payload.id) {
        return {
          ...item,
          id: payload.id,
          category: payload.category,
          title: payload.title,
          description: payload.description,
          sallary: payload.sallary,
          education: payload.education,
          contactMail: payload.contactMail,
          contactPhone: payload.contactPhone,
          workExperienceRequired: payload.workExperienceRequired,
          location: payload.location,
        };
      }
      return item;
    }),
    ...(state.certain ? { certain: payload } : null),
  };
};

export const getCertainReducer = (
  state: IVacancyState,
  { payload }: PayloadAction<IVacancy, string>
) => {
  return {
    ...state,
    isLoading: false,
    certain: payload,
  };
};

export const getAllVacancyTitlesReducer = (
  state: IVacancyState,
  { payload }: PayloadAction<IVacancyTitle[], string>
) => {
  return { ...state, isLoading: false, titles: payload };
};
