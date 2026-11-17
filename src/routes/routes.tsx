import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Reservation from "../pages/Reservation";
import Gite from "../pages/Gite";
import Visite from "../pages/Visite";
import Acces from "../pages/Acces";
import Commentaire from "../pages/Commentaire";
import ErrorPage from "../pages/ErrorPage";

/** Remet la page en haut à chaque navigation (et restaure la position au retour arrière). */
const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
)

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Accueil /> },
      { path: "/reservation", element: <Reservation /> },
      { path: "/gite", element: <Gite /> },
      { path: "/visite", element: <Visite /> },
      { path: "/acces", element: <Acces /> },
      { path: "/commentaire", element: <Commentaire /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
])
