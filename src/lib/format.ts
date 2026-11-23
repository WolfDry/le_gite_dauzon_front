const euroFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 })

/** 1234.5 -> "1 234,50 €" ; les montants ronds n'affichent pas de décimales. */
export function formatEuro(amount: number): string {
  const formatted = euroFormat.format(amount)
  return Number.isInteger(amount) ? formatted.replace(',00', '') : formatted
}
