import axios from 'axios';

// const BASE_URL = 'https://65244ab6ea560a22a4e9b4c5.mockapi.io/contacts';
const BASE_URL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = BASE_URL;

export const getAllContacts = () => {
  return axios.get('/contacts');
};

export const addContact = contact => {
  return axios.post('/contacts', { name: contact.name, number: contact.phone });
};

export const removeContact = id => {
  return axios.delete(`contacts/${id}`, '');
};
