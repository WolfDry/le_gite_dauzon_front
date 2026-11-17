import { useLocation } from 'react-router'
import { blue, darkBlue, darkGreen, green, yellow } from '../assets/color'

type PageColor = { normal: string, dark: string }

const GREEN: PageColor = { normal: green, dark: darkGreen }
const BLUE: PageColor = { normal: blue, dark: darkBlue }
const YELLOW: PageColor = { normal: yellow, dark: yellow }

const COLORS: Record<string, PageColor> = {
  '/': GREEN,
  '/reservation': BLUE,
  '/gite': YELLOW,
  '/visite': GREEN,
  '/acces': BLUE,
  '/commentaire': YELLOW,
  '/mentions-legales': GREEN,
  '/confidentialite': GREEN,
}

/** Couleur dominante de la page courante (en-tête, pied de page). */
export const usePageColor = (): PageColor => COLORS[useLocation().pathname] ?? GREEN
