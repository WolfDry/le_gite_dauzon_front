enum TarifFrequence {
  SEMAINE,
  JOUR,
  WEEKEND,
  PERSONNE,
}

export type Tarif = {
    desc: string
    label: string
    start_date: Date[]
    end_date: Date[]
    vacance?: boolean
    prix: number
    frequence: TarifFrequence[]
}

export type UpdateTarif = {
    desc?: string
    label?: string
    start_date?: Date[]
    end_date?: Date[]
    vacance?: boolean
    prix?: number
    frequence?: TarifFrequence[]
}