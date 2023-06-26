import type { RootState } from 'redux/store';

export const selectFeedbacks = (state: RootState) => state.feedbacks;

export const selectAllFeedbacks = (state: RootState) =>
  state.feedbacks.entities;

export const selectFeedbackPagination = (state: RootState) =>
  state.feedbacks.pagination;

export const selectFeedbackError = (state: RootState) => state.feedbacks.error;
