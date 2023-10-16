import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  IFeedback,
  IFeedbackState,
  IFeedbackPagination,
  IFeedbackList,
} from 'helpers/types';

export const pendingReducer = (state: IFeedbackState) => {
  return { ...state, isLoading: true, error: null };
};

export const rejectedReducer = (
  state: IFeedbackState,
  { payload }: PayloadAction<string | undefined>
) => {
  return {
    ...state,
    isLoading: false,
    ...(payload ? { error: payload } : null),
  };
};

export const removeCertainFeedbackReducer = (state: IFeedbackState) => ({
  ...state,
  certain: null,
});

export const getAllFeedbackssReducer = (
  state: IFeedbackState,
  {
    payload,
  }: PayloadAction<
    { feedbacks: IFeedback[]; pagination: IFeedbackPagination },
    string
  >
) => {
  return {
    ...state,
    isLoading: false,
    entities: payload.feedbacks,
    pagination: payload.pagination,
  };
};

export const getCertainFeedbackReducer = (
  state: IFeedbackState,
  { payload }: PayloadAction<IFeedback, string>
) => {
  return { ...state, isLoading: false, certain: payload };
};

export const updateFeedbackViewsReducer = (
  state: IFeedbackState,
  { payload }: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.map(entity =>
      entity.id === payload ? { ...entity, isReviewed: true } : entity
    ),
  };
};

export const updateFeedbackFavoriteReducer = (
  state: IFeedbackState,
  { payload }: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.map(entity =>
      entity.id === payload
        ? { ...entity, isFavorite: !entity.isFavorite }
        : entity
    ),
    ...(state.certain
      ? {
          certain: {
            ...state.certain,
            isFavorite: !state.certain.isFavorite,
          },
        }
      : null),
  };
};

export const removeFeedbackReducer = (
  state: IFeedbackState,
  { payload }: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.filter(item => item.id !== payload),
  };
};

export const loadMoreFeedbacksReducer = (
  state: IFeedbackState,
  { payload }: PayloadAction<IFeedbackList, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: [...state.entities, ...payload.feedbacks],
    pagination: payload.pagination,
  };
};
