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
  page: 1,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: initialState,
  reducers: {
    setPage: (state, _) => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...payload];
      })
      .addCase(getAdverts.rejected, handleRejected);
  },
});

export const { setPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
