import type { Disponibilite } from '../types/Reservation.type'

/**
 * Périodes indisponibles (séjours réservés et dates bloquées) : les nuits du `debut` au `fin`,
 * le `fin` étant un jour de départ. Les séjours peuvent se suivre : on peut arriver le jour où
 * un autre séjour se termine, et partir le jour où un autre commence.
 * Toutes les dates sont au format AAAA-MM-JJ et se comparent comme des chaînes.
 */
export type Periode = { debut: string; fin: string }

/** "2026-07-04T00:00:00.000Z" (format de l'API) -> "2026-07-04". */
export const toPeriodes = (disponibilites: Disponibilite[]): Periode[] =>
  disponibilites.map(({ debut, fin }) => ({ debut: debut.slice(0, 10), fin: fin.slice(0, 10) }))

/** La nuit du `jour` est occupée : impossible d'arriver ce jour-là. */
export const isNuitOccupee = (jour: string, periodes: Periode[]): boolean =>
  periodes.some((p) => p.debut <= jour && jour < p.fin)

/** Première période qui partage au moins une nuit avec le séjour [debut, fin), ou `undefined`. */
export const findConflit = (debut: string, fin: string, periodes: Periode[]): Periode | undefined =>
  periodes
    .filter((p) => p.debut < fin && p.fin > debut)
    .sort((a, b) => (a.debut < b.debut ? -1 : 1))[0]

/**
 * Jours du calendrier qu'on ne peut pas choisir :
 * - pour l'arrivée, les jours dont la nuit est occupée ;
 * - une fois l'arrivée choisie, les départs après le début de la période indisponible suivante.
 */
export const isJourIndisponible = (jour: string, arrivee: string | null, periodes: Periode[]): boolean => {
  if (arrivee && jour > arrivee) return findConflit(arrivee, jour, periodes) !== undefined
  return isNuitOccupee(jour, periodes)
}
