import { describe, expect, it } from 'vitest'
import { emptyVoyageurs, fromReservationSearch, toReservationSearch } from './reservationParams'

const people = (adultes: number, enfants: number, animaux: number) => ({ adultes, enfants, animaux })

describe('toReservationSearch', () => {
  it('ne garde que les valeurs renseignées', () => {
    expect(toReservationSearch({ dates: { debut: '2027-07-03', fin: null }, voyageurs: people(2, 0, 1) }))
      .toBe('?debut=2027-07-03&adultes=2&animaux=1')
  })

  it('renvoie une chaîne vide sans aucune valeur', () => {
    expect(toReservationSearch({ dates: { debut: null, fin: null }, voyageurs: emptyVoyageurs() })).toBe('')
  })
})

describe('fromReservationSearch', () => {
  it('relit ce que toReservationSearch écrit', () => {
    const prefill = { dates: { debut: '2027-07-03', fin: '2027-07-10' }, voyageurs: people(2, 1, 0) }
    const search = toReservationSearch(prefill)
    expect(fromReservationSearch(new URLSearchParams(search))).toEqual(prefill)
  })

  it('ignore les dates mal formées et borne les nombres', () => {
    const result = fromReservationSearch(new URLSearchParams('debut=demain&fin=2027-13&adultes=-3&enfants=999&animaux=abc'))
    expect(result).toEqual({ dates: { debut: null, fin: null }, voyageurs: people(0, 20, 0) })
  })
})
