import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./placesSlice";

export const store = configureStore({
  reducer: {
    tourist: placeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;