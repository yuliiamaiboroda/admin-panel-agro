import type { RootState } from 'redux/store';
export const selectUser = (state: RootState) => state.userData;

export const selectUserRole = (state: RootState) => state.userData.user.role;
