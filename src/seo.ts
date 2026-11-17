import type { MetaDescriptor } from 'react-router'
import { SOCIAL_LINKS } from './assets/socials'

/** Adresse publique du site (sans barre finale). Même valeur par défaut que dans react-router.config.ts. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://www.legitedauzon.fr').replace(/\/$/, '')
export const SITE_NAME = "Le Gîte d'Auzon"

/** Image d'aperçu pour les réseaux sociaux (1200 × 630). */
const DEFAULT_IMAGE = {
  path: '/assets/images/partage.jpg',
  alt: "La piscine couverte du Gîte d'Auzon, à Joyeuse en Ardèche",
}

type PageMeta = {
  /** Titre de la page, sans le nom du site (ajouté automatiquement). Absent pour l'accueil. */
  title?: string
  description: string
  /** Chemin de la page, par exemple `/gite`. */
  path: string
  /** Pages à ne pas référencer (page introuvable…). */
  noindex?: boolean
}

/** Balises `title`, description, URL canonique et Open Graph d'une page. */
export const pageMeta = ({ title, description, path, noindex }: PageMeta): MetaDescriptor[] => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME}, gîte à Joyeuse en Ardèche`
  const url = `${SITE_URL}${path}`
  return [
    { title: fullTitle },
    { name: 'description', content: description },
    ...(noindex
      ? [{ name: 'robots', content: 'noindex' }]
      : [{ tagName: 'link', rel: 'canonical', href: url }]),
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: `${SITE_URL}${DEFAULT_IMAGE.path}` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: DEFAULT_IMAGE.alt },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]
}

/** Données structurées schema.org du gîte, pour la page d'accueil. */
export const lodgingBusinessJsonLd = (description: string): MetaDescriptor => ({
  'script:ld+json': {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: SITE_NAME,
    description,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${DEFAULT_IMAGE.path}`,
    email: 'legitedauzon@free.fr',
    telephone: '+33 6 10 33 99 06',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '20 impasse du Petit Nice',
      postalCode: '07260',
      addressLocality: 'Joyeuse',
      addressRegion: 'Ardèche',
      addressCountry: 'FR',
    },
    petsAllowed: true,
    paymentAccepted: 'Chèques-Vacances ANCV',
    sameAs: SOCIAL_LINKS.map((social) => social.url),
  },
})
