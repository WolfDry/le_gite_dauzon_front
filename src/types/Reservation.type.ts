import { Client } from "./Client.type"
import { Supplement } from "./Supplement.type"

export type Reservation = {
    id: number
    tarif: number
    debut: Date
    fin: Date
    dateAjout: Date
    nbPersonne: {
        label: string
        nb: number
    }
    clientId: number
    client: Client
    supplement: Supplement[]
}

export type UpdateReservation = {
    tarif?: number
    debut?: Date
    fin?: Date
    nbPersonne?: {
        label: string
        nb: number
    }
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