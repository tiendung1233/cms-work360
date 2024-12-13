import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: {
    global: globalReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([]),
});

export default store;
