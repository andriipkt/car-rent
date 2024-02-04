import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65ba6ac8b4d53c066552da88.mockapi.io/';

export const getAdverts = createAsyncThunk(
  'adverts/getAll',
  async ({ page = 1, carBrand = '', price = '' }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/adverts?page=${page}&limit=12&make=${carBrand}&rentalPrice=${price}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
