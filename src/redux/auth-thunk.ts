import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfile, updatePhoto } from '../services/auth.service';

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

export type UpdatePhotoArg = {
  userID: string;
  photoURL: string;
};

export const updatePhotoThunk = createAsyncThunk('auth/updatePhotoThunk', async (arg: UpdatePhotoArg) => {
  try {
    await updatePhoto(arg.userID, arg.photoURL);
    console.log('updatePhotoThunk');
  } catch (e) {
    console.log('🟥 updatePhotoThunk, e:', e);
    throw e;
  }
});
