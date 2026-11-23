import { describe, expect, it } from 'vitest'
import { formatEuro } from './format'

describe('formatEuro', () => {
  it('affiche les centimes seulement quand il y en a', () => {
    // Intl sépare le montant du symbole (et les milliers) par des espaces insécables.
    const normalize = (value: string) => value.replace(/\s/g, ' ')
    expect(normalize(formatEuro(700))).toBe('700 €')
    expect(normalize(formatEuro(12.5))).toBe('12,50 €')
    expect(normalize(formatEuro(1234.5))).toBe('1 234,50 €')
  })
})
