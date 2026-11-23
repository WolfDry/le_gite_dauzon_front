import { Voyageurs } from "./App.type"

/** Période déjà réservée, telle que renvoyée par la route publique des disponibilités. */
export type Disponibilite = {
    debut: string
    fin: string
}

/** Demande de réservation envoyée à l'API. */
export type AskReservation = Voyageurs & {
    /** AAAA-MM-JJ */
    debut: string
    /** AAAA-MM-JJ */
    fin: string
    nom: string
    email: string
    phone: string
    message?: string
}
