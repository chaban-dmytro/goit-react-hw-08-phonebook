import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { newSlice } from './slice';

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: newSlice.reducer,
  },
  enhancer,
} )

