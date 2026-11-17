# Le Gîte d'Auzon — site public

Site vitrine et de demande de réservation du gîte. Il consomme l'API NestJS (`../back`) ; le back office est dans `../admin`.

## Stack

- [React Router](https://reactrouter.com) en mode framework, sur [Vite](https://vite.dev) : chaque page est **rendue en HTML au build** (prérendu), puis le JavaScript prend le relais dans le navigateur. Il n'y a pas de serveur à l'exécution : le build est un dossier de fichiers statiques.
- [TanStack Query](https://tanstack.com/query) : lectures et envois vers l'API (`src/services/queries.ts`, `src/services/mutations.ts`).
- styled-components : composants de style dans `src/components/nanites`, assemblés en atomes et molécules.
- Polices Poppins et Handlee hébergées avec le site (`@fontsource`), sans appel à Google Fonts.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
```

L'API doit tourner en parallèle (`npm run start:dev` dans `../back`, port 3001).

| Commande                 | Rôle                                                              |
| ------------------------ | ----------------------------------------------------------------- |
| `npm run dev`            | serveur de développement                                          |
| `npm run build`          | build et prérendu de toutes les pages dans `build/client`         |
| `npm run preview`        | sert `build/client` comme Vercel (port 4173, 404 comprise)        |
| `npm run typecheck`      | vérification TypeScript                                           |
| `npm test`               | tests unitaires (Vitest)                                          |
| `npm run storybook`      | catalogue des composants                                          |

## Configuration

Copier `.env.example` en `.env`. Les variables sont lues **au build** : chez l'hébergeur, elles doivent être définies avant de lancer le build.

| Variable                     | Rôle                                                                 |
| ---------------------------- | -------------------------------------------------------------------- |
| `VITE_API_URL`               | URL de l'API, sans barre finale                                      |
| `VITE_CLOUDINARY_CLOUD_NAME` | compte Cloudinary des images des idées de visite                     |
| `VITE_SITE_URL`              | facultatif : adresse publique du site (voir ci-dessous)              |

`VITE_SITE_URL` sert aux URL canoniques, à Open Graph et au sitemap. Par défaut : `https://www.legitedauzon.fr`.

## Organisation

```text
src/
  root.tsx           document HTML commun, polices, fournisseur TanStack Query
  routes.ts          liste des pages (une entrée = une page prérendue + une URL du sitemap)
  entry.server.tsx   rendu HTML au build, avec les styles styled-components
  seo.ts             balises title, description, canonique, Open Graph, données structurées
  pages/             une page par fichier, chacune exporte `meta`
  services/          client axios, requêtes et envois TanStack Query
  lib/               consentement aux contenus tiers, paramètres de réservation, hydratation
  components/        nanites (styles) → atoms → molecules
react-router.config.ts   prérendu, puis génération de 404.html et sitemap.xml
```

## Points d'attention

- **Ce qui dépend de la date du jour** (mois du calendrier, date minimale d'un champ) ne doit être rendu qu'après l'hydratation, avec `useHydrated()` (`src/lib/useHydrated.ts`). Sinon la page prérendue (date du build) et la page dans le navigateur diffèrent.
- **Ajouter une page** : créer le fichier dans `src/pages` avec un export `meta` (`pageMeta(...)`), l'ajouter à `src/routes.ts`. Le prérendu et le sitemap suivent automatiquement.
- **YouTube et Google Maps** ne se chargent qu'après un clic du visiteur (`ExternalContent`). Le choix « Toujours afficher » est mémorisé dans le navigateur et se retire depuis la page Confidentialité.
- Les données de l'API (avis, événements, tarifs, disponibilités) sont chargées dans le navigateur : elles ne figurent pas dans le HTML prérendu.

## Déploiement (Vercel)

`vercel.json` publie `build/client` en fichiers statiques. Vercel sert `404.html` (avec le code 404) pour toute adresse inconnue.
