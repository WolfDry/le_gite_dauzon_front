// types/Tarif.type.ts
export enum TarifFrequence {
  SEMAINE = "SEMAINE",
  JOUR = "JOUR",
  WEEKEND = "WEEKEND",
  PERSONNE = "PERSONNE",
}


export type Tarif = {
  id?: number
  desc: string
  label: string
  date: string[]
  vacance?: boolean
  prix: number
  frequence: TarifFrequence[]
}

export type UpdateTarif = {
  desc?: string
  label?: string
  start_date?: string[]
  vacance?: boolean
  prix?: number
  frequence?: TarifFrequence[]
}