import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65ba6ac8b4d53c066552da88.mockapi.io/';

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async ({ page = 1 }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllAdverts = createAsyncThunk(
  'adverts/getAllAdverts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
