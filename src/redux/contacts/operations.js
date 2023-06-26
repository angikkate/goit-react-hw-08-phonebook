import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');

    return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const { data } = await axios.post('/contacts', newContact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const { data } = await axios.delete(`/contacts/${contactId}`);

    return data;
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async updatedContact => {
    const { data } = await axios.patch(
      `/contacts/${updatedContact.id}`,
      updatedContact.body
    );
    return data;
  }
);