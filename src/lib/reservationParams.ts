import type { Dates, NbPersonne } from '../types/App.type'

/**
 * Le formulaire de l'accueil transmet dates et nombre de personnes à la page Réservation
 * par l'adresse : /reservation?debut=2027-07-03&fin=2027-07-10&adultes=2&enfants=1
 * (le lien peut ainsi être partagé ou mis en favori).
 */

/** Libellé affiché (et envoyé à l'API) → nom du paramètre d'URL. */
const PERSON_PARAMS: Record<string, string> = {
  Adultes: 'adultes',
  Enfants: 'enfants',
  Animaux: 'animaux',
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
const MAX_PER_CATEGORY = 20

export const emptyNbPersonne = (): NbPersonne[] =>
  Object.keys(PERSON_PARAMS).map((label) => ({ label, nb: 0 }))

export type ReservationPrefill = {
  dates: Dates
  nbPersonne: NbPersonne[]
}

export const toReservationSearch = ({ dates, nbPersonne }: ReservationPrefill): string => {
  const params = new URLSearchParams()
  if (dates.debut) params.set('debut', dates.debut)
  if (dates.fin) params.set('fin', dates.fin)
  for (const { label, nb } of nbPersonne) {
    const key = PERSON_PARAMS[label]
    if (key && nb > 0) params.set(key, String(nb))
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
  const nbPersonne = emptyNbPersonne().map(({ label }) => {
    const nb = Number.parseInt(params.get(PERSON_PARAMS[label]) ?? '', 10)
    return { label, nb: Number.isFinite(nb) ? Math.min(Math.max(nb, 0), MAX_PER_CATEGORY) : 0 }
  })
  return { dates: { debut: date('debut'), fin: date('fin') }, nbPersonne }
}
