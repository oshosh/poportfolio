import logger from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';

import reducer from './slices/rootReducer';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export type AppDispatch = typeof store.dispatch;
export default store;
