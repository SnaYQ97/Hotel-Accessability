import { configureStore } from '@reduxjs/toolkit';
import accessibilityReducer from "../reducers/ accessibilityReducer.ts";

export const index = configureStore({
  reducer: {
    accessibility: accessibilityReducer,
  },
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
