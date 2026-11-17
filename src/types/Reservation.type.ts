import { NbPersonne } from "./App.type"

/** Période déjà réservée, telle que renvoyée par la route publique des disponibilités. */
export type Disponibilite = {
    debut: string
    fin: string
}

export type AskReservation = {
    /** AAAA-MM-JJ */
    debut: string
    /** AAAA-MM-JJ */
    fin: string
    nbPersonne: NbPersonne[]
    nom: string
    email: string
    phone: string
    message?: string
}
