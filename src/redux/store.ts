import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userListReducer } from "./features/userListSlice/userListSlice";
import { userReducer } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    userList: userListReducer,
  },
});

export type appThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
