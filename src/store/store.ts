import partiesReducer from "./slices/parties";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    parties: partiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
