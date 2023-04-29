import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://644d7c6fcfdddac970a59b56.mockapi.io/contacts/';
export const addContact = createAsyncThunk(
  'contacts/add',
  async (param, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', param);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (deleteId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${deleteId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
