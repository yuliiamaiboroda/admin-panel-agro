import { createSlice } from '@reduxjs/toolkit';
import {
  createService,
  deleteService,
  getAllServices,
  updateService,
  getCertainService,
} from './operations';
import type { IServiceState } from 'helpers/types';
import * as services from './reducers';

export const initialState: IServiceState = {
  entities: [],
  certain: null,
  isLoading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    removeCertainService: services.removeCertainServiceReducer,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllServices.pending, services.pendingReducer)
      .addCase(getAllServices.fulfilled, services.getAllServicesReducer)
      .addCase(getAllServices.rejected, services.rejectedReducer)
      .addCase(getCertainService.pending, services.pendingReducer)
      .addCase(getCertainService.fulfilled, services.getCertainServiceReducer)
      .addCase(getCertainService.rejected, services.rejectedReducer)
      .addCase(createService.pending, services.pendingReducer)
      .addCase(createService.fulfilled, services.createServiceReducer)
      .addCase(createService.rejected, services.rejectedReducer)
      .addCase(deleteService.pending, services.pendingReducer)
      .addCase(deleteService.fulfilled, services.deleteServiceReducer)
      .addCase(deleteService.rejected, services.rejectedReducer)
      .addCase(updateService.pending, services.pendingReducer)
      .addCase(updateService.fulfilled, services.updateServiceReducer)
      .addCase(updateService.rejected, services.rejectedReducer),
});

export const servicesReducer = servicesSlice.reducer;
export const { removeCertainService } = servicesSlice.actions;
