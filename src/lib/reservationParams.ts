import type { Dates, Voyageurs } from '../types/App.type'

/**
 * Le formulaire de l'accueil transmet dates et nombre de personnes à la page Réservation
 * par l'adresse : /reservation?debut=2027-07-03&fin=2027-07-10&adultes=2&enfants=1
 * (le lien peut ainsi être partagé ou mis en favori).
 */

/** Catégories de voyageurs : noms des champs de l'API et des paramètres d'URL. */
export const VOYAGEUR_KEYS = ['adultes', 'enfants', 'animaux'] as const

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
/** Nombre maximal par catégorie : borne les compteurs du formulaire et la lecture de l'adresse. */
export const MAX_PER_CATEGORY = 20

export const emptyVoyageurs = (): Voyageurs => ({ adultes: 0, enfants: 0, animaux: 0 })

export const hasVoyageurs = (voyageurs: Voyageurs): boolean => VOYAGEUR_KEYS.some((key) => voyageurs[key] > 0)

export type ReservationPrefill = {
  dates: Dates
  voyageurs: Voyageurs
}

export const toReservationSearch = ({ dates, voyageurs }: ReservationPrefill): string => {
  const params = new URLSearchParams()
  if (dates.debut) params.set('debut', dates.debut)
  if (dates.fin) params.set('fin', dates.fin)
  for (const key of VOYAGEUR_KEYS) {
    if (voyageurs[key] > 0) params.set(key, String(voyageurs[key]))
  }
  const search = params.toString()
  return search ? `?${search}` : ''
}

/** Lit l'adresse ; les valeurs absentes ou mal formées sont ignorées. */
export const fromReservationSearch = (params: URLSearchParams): ReservationPrefill => {
  const date = (key: string) => {
    const value = params.get(key)
    return value && DATE_PATTERN.test(value) ? value : null
  }
  const voyageurs = emptyVoyageurs()
  for (const key of VOYAGEUR_KEYS) {
    const nb = Number.parseInt(params.get(key) ?? '', 10)
    voyageurs[key] = Number.isFinite(nb) ? Math.min(Math.max(nb, 0), MAX_PER_CATEGORY) : 0
  }
  return { dates: { debut: date('debut'), fin: date('fin') }, voyageurs }
}
