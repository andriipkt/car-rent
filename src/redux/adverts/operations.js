import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//https://project_token.mockapi.io/users/1/tasks?completed=false&page=1&limit=10"
axios.defaults.baseURL = 'https://65ba6ac8b4d53c066552da88.mockapi.io/';

export const getAdverts = createAsyncThunk(
  'adverts/getAll',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
