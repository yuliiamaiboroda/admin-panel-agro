import type { RootState } from 'redux/store';

export const selectFeedbacks = (state: RootState) => state.feedbacks;
