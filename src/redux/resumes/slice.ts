import { createSlice } from '@reduxjs/toolkit';
import {
  getAllResumes,
  getCertainResume,
  createResume,
  removeResume,
  updateResumeViews,
  loadMoreResumes,
  updateResumeIsFavorite,
} from './operations';
import {
  removeCertainResumeReducer,
  pendingResumeReducer,
  rejectedResumeReducer,
  getAllResumesFulfilledReducer,
  loadMoreResumesFulfilledReducer,
  getCertainResumeFulfilledReducer,
  createResumeFulfilledReducer,
  removeResumeFulfilledReducer,
  updateResumeViewsFulfilledReducer,
  updateResumeIsFavoriteFulfilledReducer,
} from './reducers';
import type { IResume, IResumeEntity, IResumePagination } from 'helpers/types';

export interface IState {
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

const resumesSlice = createSlice({
  name: 'resumes',
  initialState,
  reducers: {
    removeCertainResume: removeCertainResumeReducer,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllResumes.pending, pendingResumeReducer)
      .addCase(getAllResumes.fulfilled, getAllResumesFulfilledReducer)
      .addCase(getAllResumes.rejected, rejectedResumeReducer)
      .addCase(loadMoreResumes.pending, pendingResumeReducer)
      .addCase(loadMoreResumes.fulfilled, loadMoreResumesFulfilledReducer)
      .addCase(loadMoreResumes.rejected, rejectedResumeReducer)
      .addCase(getCertainResume.pending, pendingResumeReducer)
      .addCase(getCertainResume.fulfilled, getCertainResumeFulfilledReducer)
      .addCase(getCertainResume.rejected, rejectedResumeReducer)
      .addCase(createResume.pending, pendingResumeReducer)
      .addCase(createResume.fulfilled, createResumeFulfilledReducer)
      .addCase(createResume.rejected, rejectedResumeReducer)
      .addCase(removeResume.pending, pendingResumeReducer)
      .addCase(removeResume.fulfilled, removeResumeFulfilledReducer)
      .addCase(removeResume.rejected, rejectedResumeReducer)
      .addCase(updateResumeViews.pending, pendingResumeReducer)
      .addCase(updateResumeViews.fulfilled, updateResumeViewsFulfilledReducer)
      .addCase(updateResumeViews.rejected, rejectedResumeReducer)
      .addCase(updateResumeIsFavorite.pending, pendingResumeReducer)
      .addCase(
        updateResumeIsFavorite.fulfilled,
        updateResumeIsFavoriteFulfilledReducer
      )
      .addCase(updateResumeIsFavorite.rejected, rejectedResumeReducer);
  },
});

export const resumesReducer = resumesSlice.reducer;
export const { removeCertainResume } = resumesSlice.actions;
