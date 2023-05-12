import { createSlice } from '@reduxjs/toolkit';
import { getAllServices } from './operations';

export interface IService {
  _id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
  createdAt?: string;
}

interface IState {
  entities: IService[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  entities: [],
  isLoading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllServices.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: action.payload,
        };
      })
      .addCase(getAllServices.rejected, (state, action) => {
        console.log(action.payload);
        return {
          ...state,
          isLoading: false,
          ...(action.payload ? { error: action.payload } : null),
        };
      }),
});

export const servicesReducer = servicesSlice.reducer;
