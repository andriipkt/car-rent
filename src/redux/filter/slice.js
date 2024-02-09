import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    carBrand: '',
    price: 0,
    carMileage: { from: '', to: '' },
  },
  reducers: {
    carBrandFilter: (state, { payload }) => {
      state.carBrand = payload;
    },

    priceFilter: (state, { payload }) => {
      state.price = payload;
    },

    carMileageFilter: (state, { payload }) => {
      state.carMileage = payload;
    },
  },
});

export const { carBrandFilter, priceFilter, carMileageFilter } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
