import type { RootState } from 'redux/store';

export const selectResumes = (state: RootState) => state.resumes.entities;

export const selectCertainResume = (state: RootState) => state.resumes.certain;

export const selectResumeLoading = (state: RootState) =>
  state.resumes.isLoading;

export const selectResumeError = (state: RootState) => state.resumes.error;
