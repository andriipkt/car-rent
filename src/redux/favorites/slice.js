import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },

    deleteFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(fav => fav.id !== payload);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
