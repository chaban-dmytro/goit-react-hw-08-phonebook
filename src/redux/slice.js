import { createSlice } from '@reduxjs/toolkit';
import { getContactsList, addNewContact, deleteContact} from './operations';

export const newSlice = createSlice( {
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: ""
  },
  reducers: {
    addFilter( state, action ) {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase( getContactsList.pending, ( state, action ) => {
        state.isLoading = true;
      } )
      .addCase( getContactsList.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.contacts = action.payload;
      } )
      .addCase( getContactsList.rejected, ( state, action ) => {
        state.error = action.payload;
        state.isLoading = false;
      } )
      .addCase( addNewContact.pending, ( state, action ) => {
       state.isLoading = true;
      } )
      .addCase( addNewContact.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.contacts.push( action.payload );
      } )
      .addCase( addNewContact.rejected, ( state, action ) => {
        state.error = action.payload;
        state.isLoading = false;
      } )
      .addCase( deleteContact.pending, ( state, action ) => {
        state.isLoading = true;
      } )
      .addCase( deleteContact.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter( contact => contact.id !== action.payload.id );
      } )
      .addCase( deleteContact.rejected, ( state, action ) => {
        state.error = action.payload;
        state.isLoading = false;
      } )
  }
} );

export const { add, remove, addFilter } = newSlice.actions;

