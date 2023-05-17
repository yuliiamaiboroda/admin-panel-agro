import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllFeedback, removeFeedbackById } from './operations';

export interface IFeedback {
  _id: string;
  name: string;
  contactPhone: string;
  contactMail: string;
  comment: string;
  agreement: boolean;
}

interface IState {
  entities: IFeedback[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  entities: [],
  isLoading: false,
  error: null,
};

const feedbackPendingReducer = (state: IState) => {
  return { ...state, isLoading: true, error: null };
};

const feedbackRejectedReducer = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  return {
    ...state,
    isLoading: false,
    ...(action.payload ? { error: action.payload } : null),
  };
};

const getAllFeedbackFullfiledReducer = (
  state: IState,
  action: PayloadAction<IFeedback[], string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: action.payload,
  };
};

const removeFeedbackFullfilledReducer = (
  state: IState,
  action: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.filter(item => item._id !== action.payload),
  };
};

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllFeedback.pending, feedbackPendingReducer)
      .addCase(getAllFeedback.fulfilled, getAllFeedbackFullfiledReducer)
      .addCase(getAllFeedback.rejected, feedbackRejectedReducer)
      .addCase(removeFeedbackById.pending, feedbackPendingReducer)
      .addCase(removeFeedbackById.fulfilled, removeFeedbackFullfilledReducer)
      .addCase(removeFeedbackById.rejected, feedbackRejectedReducer),
});

export const feedbacksReducer = feedbacksSlice.reducer;
