import { describe, expect, it } from 'vitest'
import { findConflit, isJourIndisponible, isNuitOccupee, toPeriodes } from './disponibilites'

// Séjour réservé du samedi 4 au samedi 11 juillet, dates bloquées du 15 au 18.
const periodes = [
  { debut: '2026-07-15', fin: '2026-07-18' },
  { debut: '2026-07-04', fin: '2026-07-11' },
]

describe('toPeriodes', () => {
  it('garde le jour des dates renvoyées par l’API', () => {
    expect(toPeriodes([{ debut: '2026-07-04T00:00:00.000Z', fin: '2026-07-11T00:00:00.000Z' }])).toEqual([
      { debut: '2026-07-04', fin: '2026-07-11' },
    ])
  })
})

describe('isNuitOccupee', () => {
  it('occupe les nuits de l’arrivée à la veille du départ', () => {
    expect(isNuitOccupee('2026-07-03', periodes)).toBe(false)
    expect(isNuitOccupee('2026-07-04', periodes)).toBe(true)
    expect(isNuitOccupee('2026-07-10', periodes)).toBe(true)
    expect(isNuitOccupee('2026-07-11', periodes)).toBe(false)
  })
})

describe('findConflit', () => {
  it('trouve la première période qui partage une nuit avec le séjour', () => {
    expect(findConflit('2026-07-01', '2026-07-20', periodes)).toEqual({ debut: '2026-07-04', fin: '2026-07-11' })
    expect(findConflit('2026-07-12', '2026-07-16', periodes)).toEqual({ debut: '2026-07-15', fin: '2026-07-18' })
  })

  it('accepte les séjours qui se suivent (départ le jour d’une arrivée, et inversement)', () => {
    expect(findConflit('2026-06-27', '2026-07-04', periodes)).toBeUndefined()
    expect(findConflit('2026-07-11', '2026-07-15', periodes)).toBeUndefined()
  })
})

describe('isJourIndisponible', () => {
  it('sans arrivée choisie, bloque les jours dont la nuit est prise', () => {
    expect(isJourIndisponible('2026-07-04', null, periodes)).toBe(true)
    expect(isJourIndisponible('2026-07-11', null, periodes)).toBe(false)
  })

  it('après l’arrivée, laisse partir jusqu’au début de la période suivante', () => {
    expect(isJourIndisponible('2026-07-15', '2026-07-11', periodes)).toBe(false)
    expect(isJourIndisponible('2026-07-16', '2026-07-11', periodes)).toBe(true)
    expect(isJourIndisponible('2026-07-25', '2026-07-11', periodes)).toBe(true)
  })

  it('un jour avant l’arrivée choisie redevient une arrivée possible', () => {
    expect(isJourIndisponible('2026-07-02', '2026-07-11', periodes)).toBe(false)
    expect(isJourIndisponible('2026-07-05', '2026-07-11', periodes)).toBe(true)
  })
})
