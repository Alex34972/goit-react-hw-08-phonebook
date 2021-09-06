import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [actions.registerSuccess.type]: (_, action) => action.payload.user,
  [actions.loginSuccess.type]: (_, action) => action.payload.user,
  [actions.logoutSuccess.type]: () => initialState,
  [actions.getCurrentUserSuccess.type]: (_, action) => action.payload,
});
const token = createReducer(null, {
  [actions.registerSuccess.type]: (_, action) => action.payload.token,
  [actions.loginSuccess.type]: (_, action) => action.payload.token,
  [actions.logoutSuccess.type]: () => null,
});
const errorAuth = createReducer(null, {
  [actions.registerError.type]: (_, action) => action.payload,
  [actions.loginError.type]: (_, action) => action.payload,
  [actions.logoutError.type]: (_, action) => action.payload,
  [actions.getCurrentUserError.type]: (_, action) => action.payload,
});

const items = createReducer([], {
  [actions.fetchContactsSuccess.type]: (_, { payload }) => payload,
  [actions.addContactsSuccess.type]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [actions.deleteContactSuccess.type]: (state, { payload }) =>
    state.filter(element => element.id !== payload),
});

const filter = createReducer('', {
  [actions.filterContacts.type]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [actions.registerSuccess.type]: () => true,
  [actions.loginSuccess.type]: () => true,
  [actions.getCurrentUserSuccess.type]: () => true,
  [actions.logoutSuccess.type]: () => false,
  [actions.registerError.type]: () => false,
  [actions.loginError.type]: () => false,
  [actions.getCurrentUserError.type]: () => false,
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest.type]: () => true,
  [actions.fetchContactsSuccess.type]: () => false,
  [actions.fetchContactsError.type]: () => false,
  [actions.addContactsRequest.type]: () => true,
  [actions.addContactsSuccess.type]: () => false,
  [actions.addContactsError.type]: () => false,
  [actions.deleteContactRequest.type]: () => true,
  [actions.deleteContactSuccess.type]: () => false,
  [actions.deleteContactError.type]: () => false,
});
const error = createReducer('', {
  [actions.fetchContactsError.type]: (_, { payload }) => payload,
  [actions.addContactsError.type]: (_, { payload }) => payload,
  [actions.deleteContactError.type]: (_, { payload }) => payload,
  [actions.fetchContactsRequest.type]: () => null,
  [actions.addContactsRequest.type]: () => null,
  [actions.deleteContactRequest.type]: () => null,
});
export const contactList = combineReducers({
  items,
  filter,
  loading,
  error,
});
export const auth = combineReducers({
  user,
  isAuthenticated,
  token,
  errorAuth,
});
const reducers = { auth, contactList };
export default reducers;
