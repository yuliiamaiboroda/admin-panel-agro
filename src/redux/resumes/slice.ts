import { createSlice } from '@reduxjs/toolkit';
import {
  getAllResumes,
  getCertainResume,
  removeResume,
  updateResumeViews,
  loadMoreResumes,
  updateResumeIsFavorite,
} from './operations';
import * as resumes from './reducers';
import type { IResumeState } from 'helpers/types';

export const initialState: IResumeState = {
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
    removeCertainResume: resumes.removeCertainResumeReducer,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllResumes.pending, resumes.pendingReducer)
      .addCase(getAllResumes.fulfilled, resumes.getAllResumesReducer)
      .addCase(getAllResumes.rejected, resumes.rejectedReducer)
      .addCase(loadMoreResumes.pending, resumes.pendingReducer)
      .addCase(loadMoreResumes.fulfilled, resumes.loadMoreResumesReducer)
      .addCase(loadMoreResumes.rejected, resumes.rejectedReducer)
      .addCase(getCertainResume.pending, resumes.pendingReducer)
      .addCase(getCertainResume.fulfilled, resumes.getCertainResumeReducer)
      .addCase(getCertainResume.rejected, resumes.rejectedReducer)
      .addCase(removeResume.pending, resumes.pendingReducer)
      .addCase(removeResume.fulfilled, resumes.removeResumeReducer)
      .addCase(removeResume.rejected, resumes.rejectedReducer)
      .addCase(updateResumeViews.pending, resumes.pendingReducer)
      .addCase(updateResumeViews.fulfilled, resumes.updateResumeViewsReducer)
      .addCase(updateResumeViews.rejected, resumes.rejectedReducer)
      .addCase(updateResumeIsFavorite.pending, resumes.pendingReducer)
      .addCase(
        updateResumeIsFavorite.fulfilled,
        resumes.updateResumeIsFavoriteReducer
      )
      .addCase(updateResumeIsFavorite.rejected, resumes.rejectedReducer);
  },
});

export const resumesReducer = resumesSlice.reducer;
export const { removeCertainResume } = resumesSlice.actions;
