import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistStore } from "redux-persist";

import partiesReducer from "./slices/parties";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    parties: partiesReducer,
  },
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
