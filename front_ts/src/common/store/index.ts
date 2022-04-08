import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/rootReducer";

import logger from "redux-logger";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export type AppDispatch = typeof store.dispatch;
export default store;
