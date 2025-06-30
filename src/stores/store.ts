import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/appReducer";
import { commentaireReducer } from "./reducers/commentaireReducer";

export const store = configureStore({
  reducer: {
    app: appReducer,
    comment: commentaireReducer,
  }
})