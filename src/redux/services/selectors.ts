import type { RootState } from 'redux/store';

export const selectServices = (state: RootState) => state.services.entities
