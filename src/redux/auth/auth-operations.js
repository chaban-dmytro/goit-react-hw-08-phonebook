import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    alert(
      'User witch this email or this name is already registrated. Try another name and e-mail'
    );
    console.log('ERROR ');
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    alert('Wrong email or password');
    console.log('ERROR ');
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    alert('Try reload page. Logout is failed');
    console.log('ERROR ');
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log('ERROR ');
    }
  }
);
