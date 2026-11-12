import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Reservation from "../pages/Reservation";
import Gite from "../pages/Gite";
import Visite from "../pages/Visite";
import Acces from "../pages/Acces";
import Commentaire from "../pages/Commentaire";

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
  {
    path: "/gite",
    element: (
      <Gite />
    )
  },
  {
    path: "/visite",
    element: (
      <Visite />
    )
  },
  {
    path: "/acces",
    element: (
      <Acces />
    )
  },
  {
    path: "/commentaire",
    element: (
      <Commentaire />
    )
  },
])