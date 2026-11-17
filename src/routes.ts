import { index, route, type RouteConfig } from '@react-router/dev/routes'

/**
 * Pages du site. Chacune est prérendue en HTML au build et ajoutée au sitemap
 * (voir react-router.config.ts) ; chacune exporte ses balises `meta` (voir src/seo.ts).
 */
export default [
  index('pages/Accueil.tsx'),
  route('gite', 'pages/Gite.tsx'),
  route('reservation', 'pages/Reservation.tsx'),
  route('visite', 'pages/Visite.tsx'),
  route('acces', 'pages/Acces.tsx'),
  route('commentaire', 'pages/Commentaire.tsx'),
  route('mentions-legales', 'pages/MentionsLegales.tsx'),
  route('confidentialite', 'pages/Confidentialite.tsx'),
  route('*', 'pages/ErrorPage.tsx'),
] satisfies RouteConfig
