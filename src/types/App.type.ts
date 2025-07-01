export type Dates = {
  debut: string | null
  fin: string | null
}

export type NbPersonne = {
  label: string
  nb: number
}

export type Event = {
  id: number
  title: string
  date: Date | null
  type: string
  location: string | null
  description: string
  link: string | null
  image: string
}