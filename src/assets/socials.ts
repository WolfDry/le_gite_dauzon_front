export type SocialLink = {
  name: string
  url: string
  /** Libellé de l'icône dans Visual.Svg (en-tête, menu mobile). */
  svg: string
  /** Icône en couleur du bloc « Suivez-nous sur les réseaux ». */
  image: string
}

/**
 * Réseaux affichés dans l'en-tête, le menu mobile et le bloc « Suivez-nous ».
 * TikTok est masqué tant que le compte n'existe pas : pour l'afficher, ajouter
 * { name: 'TikTok', url: '<adresse du compte>', svg: 'tk', image: '/assets/images/socials/tiktok.png' }.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/legitedauzon.fr',
    svg: 'fb',
    image: '/assets/images/socials/facebook.png',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/legitedauzon',
    svg: 'ig',
    image: '/assets/images/socials/instagram.png',
  },
]
