import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfile } from '../services/auth.service';

export const getProfileThunk = createAsyncThunk('auth/getProfileThunk', async (userID: string) => {
  try {
    const profile = await getProfile(userID);
    console.log('getProfileThunk, profile:', profile);
    return profile;
  } catch (e) {
    console.log('🟥 getProfileThunk, e:', e);
    throw e;
  }
});
