import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactReducer,
  },
});
