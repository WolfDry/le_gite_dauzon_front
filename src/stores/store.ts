import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/appReducer";
import { commentaireReducer } from "./reducers/commentaireReducer";
import { reservationReducer } from "./reducers/reservationReducer";
import { evenementReducer } from "./reducers/evenementReducer";

export const store = configureStore({
  reducer: {
    app: appReducer,
    comment: commentaireReducer,
    reservation: reservationReducer,
    event: evenementReducer,
  }
})