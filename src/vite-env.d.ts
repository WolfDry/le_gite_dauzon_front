/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Adresse de l'API (back), sans barre finale. */
  readonly VITE_API_URL: string
  /** Compte Cloudinary qui héberge les images des événements. */
  readonly VITE_CLOUDINARY_CLOUD_NAME: string
  /** Adresse publique du site, pour les URL canoniques et Open Graph. Par défaut https://www.legitedauzon.fr. */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
