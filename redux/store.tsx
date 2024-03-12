import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appAPI } from "./api/api";

export const Store = configureStore({
  reducer: {
    [appAPI.reducerPath]: appAPI.reducer,
  },
  //   @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appAPI.middleware),
});

setupListeners(Store.dispatch);

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;