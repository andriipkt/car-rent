import { createSlice } from '@reduxjs/toolkit';
import { getAdverts, getAllAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  fullListAdverts: [],
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
    resetPage: (state, _) => {
      state.page = 1;
    },

    setFilteredAdverts: (state, { payload }) => {
      const { carBrand, price, carMileage } = payload;

      let filteredAdverts = state.fullListAdverts;

      if (carBrand) {
        filteredAdverts = filteredAdverts.filter(advert =>
          advert.make.toLowerCase().includes(carBrand.toLowerCase())
        );
      }

      if (price) {
        filteredAdverts = filteredAdverts.filter(
          advert => parseInt(advert.rentalPrice.slice(1)) <= price
        );
      }

      if (carMileage.from || carMileage.to) {
        filteredAdverts = filteredAdverts.filter(
          advert =>
            (!carMileage.from ||
              parseInt(advert.mileage) >= parseInt(carMileage.from)) &&
            (!carMileage.to ||
              parseInt(advert.mileage) <= parseInt(carMileage.to))
        );
      }

      state.adverts = filteredAdverts;
    },

    resetFilters: (state, _) => {
      state.adverts = [];
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

    builder
      .addCase(getAllAdverts.pending, handlePending)
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        state.fullListAdverts = payload;
      })
      .addCase(getAllAdverts.rejected, handleRejected);
  },
});

export const { setPage, resetPage, setFilteredAdverts, resetFilters } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
