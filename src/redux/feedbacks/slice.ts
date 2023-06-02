import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getAllFeedback,
  getCertainFeedback,
  removeFeedbackById,
  updateFeedbackIsFavorite,
  updateFeedbackViews,
} from './operations';

export interface IFeedback {
  _id: string;
  name: string;
  comment: string;
  isReviewed: boolean;
  createdAt: string;
  isFavorite: boolean;
}
export interface IFeedbackCertain {
  _id: string;
  name: string;
  contactPhone: string;
  contactMail: string;
  comment: string;
  agreement: boolean;
  isFavorite: boolean;
}
export interface IFeedbackPagination {
  skip: number;
  limit: number;
  total: number;
}

interface IState {
  entities: IFeedback[];
  isLoading: boolean;
  error: string | null;
  pagination: IFeedbackPagination;
  certain: IFeedbackCertain | null;
}

const initialState: IState = {
  entities: [],
  isLoading: false,
  error: null,
  pagination: { skip: 0, limit: 0, total: 0 },
  certain: null,
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

const getAllFeedbackFulfiledReducer = (
  state: IState,
  action: PayloadAction<
    { feedbacks: IFeedback[]; pagination: IFeedbackPagination },
    string
  >
) => {
  return {
    ...state,
    isLoading: false,
    entities: action.payload.feedbacks,
    pagination: action.payload.pagination,
  };
};

const getCertainFeedbackFulfilledReducer = (
  state: IState,
  action: PayloadAction<IFeedbackCertain, string>
) => {
  return { ...state, isLoading: false, certain: action.payload };
};

const updateViewsFulfilledReducer = (
  state: IState,
  action: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.map(entity =>
      entity._id === action.payload ? { ...entity, isReviewed: true } : entity
    ),
  };
};

const updateFeedbackFavoriteFulfilledReducer = (
  state: IState,
  action: PayloadAction<string, string>
) => {
  return {
    ...state,
    isLoading: false,
    entities: state.entities.map(entity =>
      entity._id === action.payload
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

const removeFeedbackFulfilledReducer = (
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
  reducers: {
    removeCertainFeedback(state) {
      return { ...state, certain: null };
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAllFeedback.pending, feedbackPendingReducer)
      .addCase(getAllFeedback.fulfilled, getAllFeedbackFulfiledReducer)
      .addCase(getAllFeedback.rejected, feedbackRejectedReducer)
      .addCase(removeFeedbackById.pending, feedbackPendingReducer)
      .addCase(removeFeedbackById.fulfilled, removeFeedbackFulfilledReducer)
      .addCase(removeFeedbackById.rejected, feedbackRejectedReducer)
      .addCase(getCertainFeedback.pending, feedbackPendingReducer)
      .addCase(getCertainFeedback.fulfilled, getCertainFeedbackFulfilledReducer)
      .addCase(getCertainFeedback.rejected, feedbackRejectedReducer)
      .addCase(updateFeedbackViews.pending, feedbackPendingReducer)
      .addCase(updateFeedbackViews.fulfilled, updateViewsFulfilledReducer)
      .addCase(updateFeedbackViews.rejected, feedbackRejectedReducer)
      .addCase(updateFeedbackIsFavorite.pending, feedbackPendingReducer)
      .addCase(
        updateFeedbackIsFavorite.fulfilled,
        updateFeedbackFavoriteFulfilledReducer
      )
      .addCase(updateFeedbackIsFavorite.rejected, feedbackRejectedReducer),
});

export const feedbacksReducer = feedbacksSlice.reducer;
export const { removeCertainFeedback } = feedbacksSlice.actions;
