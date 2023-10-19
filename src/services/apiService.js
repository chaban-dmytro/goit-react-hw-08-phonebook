import axios from "axios";

const BASE_URL = 'https://65244ab6ea560a22a4e9b4c5.mockapi.io/contacts';

axios.defaults.baseURL = BASE_URL;

export const getAllContacts = () => {
  return axios.get();
}

export const addContact = contact => {
  return axios.post('', contact);
}

export const removeContact = id => {
  return axios.delete(`/${id}`, '');
}