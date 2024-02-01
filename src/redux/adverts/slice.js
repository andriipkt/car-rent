import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'advertsfva',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = payload;
      })
      .addCase(getAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
