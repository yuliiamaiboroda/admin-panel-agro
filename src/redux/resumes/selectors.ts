import type { RootState } from 'redux/store';

export const selectResumes = (state: RootState) => state.resumes.entities;
