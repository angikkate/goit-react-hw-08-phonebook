import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './operations';

const initialState = {
  contacts: [],
  isLoading: {
    fetchContacts: false,
    addContact: false,
    deleteContact: false,
  },
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = null;
        state.isLoading.fetchContacts = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading.fetchContacts = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading.fetchContacts = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading.addContact = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading.addContact = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading.addContact = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading.deleteContact = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading.deleteContact = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading.deleteContact = false;
        state.error = action.error.message;
      }),
});