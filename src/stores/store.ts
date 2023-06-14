import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slice/adminSlice";

export const store = configureStore({
    reducer: {
        admin: adminSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
