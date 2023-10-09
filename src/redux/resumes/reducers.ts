import type { PayloadAction } from '@reduxjs/toolkit';
import type { IState } from './slice';
import type { IResume, IResumeResponse } from 'helpers/types';

export const removeCertainResumeReducer = (state: IState) => ({
  ...state,
  certain: null,
});

export const pendingResumeReducer = (state: IState) => ({
  ...state,
  isLoading: true,
  error: null,
});

export const rejectedResumeReducer = (
  state: IState,
  { payload }: PayloadAction<string | undefined>
) => ({ ...state, isLoading: false, ...(payload ? { error: payload } : null) });

export const getAllResumesFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<IResumeResponse>
) => ({
  ...state,
  isLoading: false,
  entities: payload.resumes,
  pagination: payload.pagination,
});

export const loadMoreResumesFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<IResumeResponse>
) => ({
  ...state,
  isLoading: false,
  entities: [...state.entities, ...payload.resumes],
  pagination: payload.pagination,
});

export const getCertainResumeFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<IResume>
) => ({
  ...state,
  isLoading: false,
  certain: payload,
});

export const removeResumeFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<string>
) => ({
  ...state,
  isLoading: false,
  entities: state.entities.filter(resume => resume.id !== payload),
  pagination: { ...state.pagination, skip: state.pagination.skip - 1 },
});

export const updateResumeViewsFulfilledReducer = (
  state: IState,
  { payload }: PayloadAction<string>
) => ({
  ...state,
  isLoading: false,
  entities: state.entities.map(resume =>
    resume.id === payload ? { ...resume, isReviewed: true } : resume
  ),
});

export const updateResumeIsFavoriteFulfilledReducer = (
  state: IState,
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
