export type Dates = {
  debut: string | null
  fin: string | null
}

/** Nombre de voyageurs par catégorie, tel qu'envoyé à l'API. */
export type Voyageurs = {
  adultes: number
  enfants: number
  animaux: number
}
