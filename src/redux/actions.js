import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('auth/registerRequest');
export const registerSuccess = createAction('auth/registerSuccess');
export const registerError = createAction('auth/registerError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction('auth/logoutError');

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('auth/getCurrentUserRequest');
export const getCurrentUserError = createAction('auth/getCurrentUserError');

export const fetchContactsRequest = createAction('fetchContactsRequest');
export const fetchContactsSuccess = createAction('fetchContactsSuccess');
export const fetchContactsError = createAction('fetchContactsError');

export const addContactsRequest = createAction('addContactsRequest');
export const addContactsSuccess = createAction('addContactsSuccess');
export const addContactsError = createAction('addContactsError');

export const deleteContactRequest = createAction('deleteContactRequest');
export const deleteContactSuccess = createAction('deleteContactSuccess');
export const deleteContactError = createAction('deleteContactError');

export const updateContactRequest = createAction('updateContactRequest');
export const updateContactSuccess = createAction('updateContactSuccess');
export const updateContactError = createAction('updateContactError');

export const filterContacts = createAction('filterContacts');
