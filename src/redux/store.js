import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { newSlice } from './slice';
import { authSlice } from './auth/auth-slice';

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: newSlice.reducer,
    auth: authSlice.reducer,
  },
  enhancer,
} )

