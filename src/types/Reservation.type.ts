import { Client } from "./Client.type"
import { Supplement } from "./Supplement.type"

type nbPersonne = {
    label: string
    nb: number
}

export type Reservation = {
    id?: number
    tarif: number
    debut: Date
    fin: Date
    dateAjout?: Date
    nbPersonne: nbPersonne[]
    clientId?: number
    client?: Client
    supplement?: Supplement[]
}

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
    nbPersonne: nbPersonne[]
    nom: string
    email: string
    phone: string
    message?: string
}
