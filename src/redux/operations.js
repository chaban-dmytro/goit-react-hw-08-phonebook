import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContacts, addContact, removeContact } from "services/apiService";

export const getContactsList = createAsyncThunk( 'contacts/getContactsList', async (_, thunkApi) => {
  try {
    const { data } = await getAllContacts();
    return data;
  } catch (error) {
    console.log(error.message);
  }
} )

export const addNewContact = createAsyncThunk( 'contacts/addContact', async (contact, thunkApi) => {
  try {
    const { data } = await addContact( contact );
    return data;
  } catch (error) {
    console.log(error.message);
  }
} )

export const deleteContact = createAsyncThunk( 'contacts/deleteContact', async (id, thunkApi) => {
  try {
    console.log(id);
    const { data } = await removeContact( id );
    return data;
  } catch (error) {
    console.log(error.message);
  }
})