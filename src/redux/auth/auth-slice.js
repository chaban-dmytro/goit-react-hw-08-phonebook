import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './auth-operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(refreshCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
