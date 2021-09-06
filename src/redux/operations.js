import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = ``;
  },
};
export const register = credential => dispatch => {
  dispatch(actions.registerRequest());
  axios
    .post('/users/signup', credential)
    .then(res => {
      token.set(res.data.token);
      dispatch(actions.registerSuccess(res.data));
    })
    .catch(error => dispatch(actions.registerError(error.message)));
};

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  await axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error.message)));
};

export const addContact = data => dispatch => {
  dispatch(actions.addContactsRequest());
  axios
    .post('/contacts', data)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch(error => dispatch(actions.addContactsError(error.message)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error.message)));
};
export const updateContact = id => dispatch => {
  dispatch(actions.updateContactRequest());
  axios
    .patch(`/contacts/${id}`)
    .then(() => dispatch(actions.updateContactSuccess(id)))
    .catch(error => dispatch(actions.updateContactError(error.message)));
};