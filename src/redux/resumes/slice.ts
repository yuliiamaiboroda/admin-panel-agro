import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  getAllResumes,
  getCertainResume,
  createResume,
  removeResume,
  updateResumeViews,
  loadMoreResumes,
} from './operations';

export interface IResume {
  _id: string;
  name: string;
  phone: string;
  email: string;
  position: string;
  resumeFileURL: string;
  comment: string;
}

export interface IResumeEntity {
  _id: string;
  name: string;
  position: string;
  comment: string;
  isReviewed: boolean;
}

export interface IResumePagination {
  skip: number;
  limit: number;
  total: number;
}

interface IState {
  entities: IResumeEntity[];
  pagination: IResumePagination;
  certain: IResume | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  entities: [],
  pagination: { skip: 0, limit: 0, total: 0 },
  certain: null,
  isLoading: false,
  error: null,
};

const pendingReducer = (state: IState) => ({
  ...state,
  isLoading: true,
  error: null,
});

const rejectedReducer = (
  state: IState,
  action: PayloadAction<string | undefined>
) => ({
  ...state,
  isLoading: false,
  ...(action.payload ? { error: action.payload } : null),
});

const resumesSlice = createSlice({
  name: 'resumes',
  initialState,
  reducers: {
    removeCertainResume(state) {
      return { ...state, certain: null };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllResumes.pending, pendingReducer)
      .addCase(getAllResumes.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: action.payload.resumes,
          pagination: action.payload.pagination,
        };
      })
      .addCase(getAllResumes.rejected, rejectedReducer)
      .addCase(loadMoreResumes.pending, pendingReducer)
      .addCase(loadMoreResumes.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: [...state.entities, ...action.payload.resumes],
          pagination: action.payload.pagination,
        };
      })
      .addCase(loadMoreResumes.rejected, rejectedReducer)
      .addCase(getCertainResume.pending, pendingReducer)
      .addCase(getCertainResume.fulfilled, (state, action) => {
        return { ...state, isLoading: false, certain: action.payload };
      })
      .addCase(getCertainResume.rejected, rejectedReducer)
      .addCase(createResume.pending, pendingReducer)
      .addCase(createResume.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: [action.payload, ...state.entities],
        };
      })
      .addCase(createResume.rejected, rejectedReducer)
      .addCase(removeResume.pending, pendingReducer)
      .addCase(removeResume.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: state.entities.filter(
            resume => resume._id !== action.payload
          ),
        };
      })
      .addCase(removeResume.rejected, rejectedReducer)
      .addCase(updateResumeViews.pending, pendingReducer)
      .addCase(updateResumeViews.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: state.entities.map(entity =>
            entity._id === action.payload
              ? { ...entity, isReviewed: true }
              : entity
          ),
        };
      })
      .addCase(updateResumeViews.rejected, rejectedReducer);
  },
});

export const resumesReducer = resumesSlice.reducer;
export const { removeCertainResume } = resumesSlice.actions;
