import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import rootReducers from "./reducers";

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
