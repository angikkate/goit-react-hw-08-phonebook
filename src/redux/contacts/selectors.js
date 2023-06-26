import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;

export const selectIsContactsFetching = state =>
  state.contacts.isLoading.fetchContacts;

export const selectIsContactAdded = state =>
  state.contacts.isLoading.addContact;

export const selectIsContactDeleted = state =>
  state.contacts.isLoading.deleteContact;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const loweredFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(loweredFilter)
    );
  }
);