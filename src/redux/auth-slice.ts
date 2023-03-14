import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';
import { ProfileDocument } from '../types/profile.type';
import { getProfileThunk } from './auth-thunk';

export interface AuthState {
  isLoading: boolean;
  profile: ProfileDocument | null;
}

const initialState: AuthState = {
  isLoading: true,
  profile: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProfileThunk.pending, (state) => {
      console.log('🟨 pending');
      // state.isLoading = true;
    });
    builder.addCase(getProfileThunk.fulfilled, (state, action) => {
      console.log('🟩 fulfilled');
      state.isLoading = false;
      state.profile = action.payload;
    });
    builder.addCase(getProfileThunk.rejected, (state) => {
      console.log('🟥 rejected');
      state.isLoading = false;
      state.profile = { firstName: '❌', lastName: '❌' };
    });
  },
});

export function selectAuthState(state: RootState): AuthState {
  return state.auth;
}

export default authSlice.reducer;
