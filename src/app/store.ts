import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import themeReducer from "../commonSlice/ThemeSlice";
import counterReducer from "../features/example/exampleCounterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, theme: themeReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
