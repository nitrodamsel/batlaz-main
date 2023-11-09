import { configureStore } from "@reduxjs/toolkit";
import triviaReducer from "../features/triviaSlice";
import userDataReducer from "../features/userDataSlice";

export const store = configureStore({
  reducer: {
    trivia: triviaReducer,
    user: userDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
