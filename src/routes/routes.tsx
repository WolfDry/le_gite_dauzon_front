import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Reservation from "../pages/Reservation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Accueil />
    )
  },
  {
    path: "/reservation",
    element: (
      <Reservation />
    )
  },
])