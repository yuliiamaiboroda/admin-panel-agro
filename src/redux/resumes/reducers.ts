import type { PayloadAction } from '@reduxjs/toolkit';
import type { IResume, IResumeResponse, IResumeState } from 'helpers/types';

export const removeCertainResumeReducer = (state: IResumeState) => ({
  ...state,
  certain: null,
});

export const pendingReducer = (state: IResumeState) => ({
  ...state,
  isLoading: true,
  error: null,
});

export const rejectedReducer = (
  state: IResumeState,
  { payload }: PayloadAction<string | undefined>
) => ({ ...state, isLoading: false, ...(payload ? { error: payload } : null) });

export const getAllResumesReducer = (
  state: IResumeState,
  { payload }: PayloadAction<IResumeResponse>
) => ({
  ...state,
  isLoading: false,
  entities: payload.resumes,
  pagination: payload.pagination,
});

export const loadMoreResumesReducer = (
  state: IResumeState,
  { payload }: PayloadAction<IResumeResponse>
) => ({
  ...state,
  isLoading: false,
  entities: [...state.entities, ...payload.resumes],
  pagination: payload.pagination,
});

export const getCertainResumeReducer = (
  state: IResumeState,
  { payload }: PayloadAction<IResume>
) => ({
  ...state,
  isLoading: false,
  certain: payload,
});

export const removeResumeReducer = (
  state: IResumeState,
  { payload }: PayloadAction<string>
) => ({
  ...state,
  isLoading: false,
  entities: state.entities.filter(resume => resume.id !== payload),
  pagination: { ...state.pagination, skip: state.pagination.skip - 1 },
});

export const updateResumeViewsReducer = (
  state: IResumeState,
  { payload }: PayloadAction<string>
) => ({
  ...state,
  isLoading: false,
  entities: state.entities.map(resume =>
    resume.id === payload ? { ...resume, isReviewed: true } : resume
  ),
});

export const updateResumeIsFavoriteReducer = (
  state: IResumeState,
  { payload }: PayloadAction<string>
) => ({
  ...state,
  isLoading: false,
  entities: state.entities.map(resume =>
    resume.id === payload
      ? { ...resume, isFavorite: !resume.isFavorite }
      : resume
  ),
  ...(state.certain?.id
    ? { certain: { ...state.certain, isFavorite: !state.certain.isFavorite } }
    : null),
});
