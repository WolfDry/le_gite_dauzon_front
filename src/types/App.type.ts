export type Dates = {
  startDate: string | null
  endDate: string | null
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
  location: string
  description: string
  link: string | null
  image: string
}