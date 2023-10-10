import { createSlice } from '@reduxjs/toolkit';
import {
  getAllFeedbacks,
  getCertainFeedback,
  loadMoreFeedbacks,
  removeFeedbackById,
  updateFeedbackIsFavorite,
  updateFeedbackViews,
} from './operations';
import type { IFeedbackState } from 'helpers/types';
import * as feedbacks from './reducers';

export const initialState: IFeedbackState = {
  entities: [],
  isLoading: false,
  error: null,
  pagination: { skip: 0, limit: 0, total: 0 },
  certain: null,
};

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    removeCertainFeedback: feedbacks.removeCertainFeedbackReducer,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllFeedbacks.pending, feedbacks.pendingReducer)
      .addCase(getAllFeedbacks.fulfilled, feedbacks.getAllFeedbackssReducer)
      .addCase(getAllFeedbacks.rejected, feedbacks.rejectedReducer)
      .addCase(removeFeedbackById.pending, feedbacks.pendingReducer)
      .addCase(removeFeedbackById.fulfilled, feedbacks.removeFeedbackReducer)
      .addCase(removeFeedbackById.rejected, feedbacks.rejectedReducer)
      .addCase(getCertainFeedback.pending, feedbacks.pendingReducer)
      .addCase(
        getCertainFeedback.fulfilled,
        feedbacks.getCertainFeedbackReducer
      )
      .addCase(getCertainFeedback.rejected, feedbacks.rejectedReducer)
      .addCase(updateFeedbackViews.pending, feedbacks.pendingReducer)
      .addCase(
        updateFeedbackViews.fulfilled,
        feedbacks.updateFeedbackViewsReducer
      )
      .addCase(updateFeedbackViews.rejected, feedbacks.rejectedReducer)
      .addCase(updateFeedbackIsFavorite.pending, feedbacks.pendingReducer)
      .addCase(
        updateFeedbackIsFavorite.fulfilled,
        feedbacks.updateFeedbackFavoriteReducer
      )
      .addCase(updateFeedbackIsFavorite.rejected, feedbacks.rejectedReducer)
      .addCase(loadMoreFeedbacks.pending, feedbacks.pendingReducer)
      .addCase(loadMoreFeedbacks.fulfilled, feedbacks.loadMoreFeedbacksReducer)
      .addCase(loadMoreFeedbacks.rejected, feedbacks.rejectedReducer),
});

export const feedbacksReducer = feedbacksSlice.reducer;
export const { removeCertainFeedback } = feedbacksSlice.actions;
