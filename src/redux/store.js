import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { newSlice } from './slice';
import { authSlice } from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const enhancer = devToolsEnhancer();

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: newSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  enhancer,
});

export let persistor = persistStore(store);
