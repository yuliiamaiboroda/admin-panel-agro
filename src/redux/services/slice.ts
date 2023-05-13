import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createService, deleteService, getAllServices } from './operations';

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

const servicesPendingReducer = (state: IState) => {
  return { ...state, isLoading: true, error: null };
};

const servicesRejectedReducer = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  console.log('action.payload in servicesRejectedReducer >>>', action.payload);
  return {
    ...state,
    isLoading: false,
    ...(action.payload ? { error: action.payload } : null),
  };
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllServices.pending, servicesPendingReducer)
      .addCase(getAllServices.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: action.payload,
        };
      })
      .addCase(getAllServices.rejected, servicesRejectedReducer)
      .addCase(createService.pending, servicesPendingReducer)
      .addCase(createService.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: [...state.entities, action.payload],
        };
      })
      .addCase(createService.rejected, servicesRejectedReducer)
      .addCase(deleteService.pending, servicesPendingReducer)
      .addCase(deleteService.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          entities: state.entities.filter(item => item._id !== action.payload),
        };
      })
      .addCase(deleteService.rejected, servicesRejectedReducer),
});

export const servicesReducer = servicesSlice.reducer;
