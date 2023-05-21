import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getAllResumes } from './operations';

export interface IResume {
  _id: string;
  name: string;
  phone: string;
  email: string;
  position: string;
  resumeFileURL: string;
  comment: string;
  agreement: boolean;
  createdAt: string;
}

interface IState {
  entities: IResume[];
  certain: IResume | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  entities: [],
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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllResumes.pending, pendingReducer)
      .addCase(getAllResumes.fulfilled, (state, action) => {
        return { ...state, isLoading: false, entities: action.payload };
      })
      .addCase(getAllResumes.rejected, rejectedReducer);
  },
});

export const resumesReducer = resumesSlice.reducer;
