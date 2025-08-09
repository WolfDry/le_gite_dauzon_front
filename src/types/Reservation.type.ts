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
    clientId: number
    client?: Client
    supplement?: Supplement[]
}

export type UpdateReservation = {
    tarif?: number
    debut?: Date
    fin?: Date
    nbPersonne?: nbPersonne[]
    clientId?: number
    verif?: boolean
}

export type AskReservation = {
    debut: Date | null
    fin: Date | null
    nbPersonne: [{
        label: string
        nb: number
    }]
    email: string
    phone: string
}