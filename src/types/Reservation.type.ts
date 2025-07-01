import { Client } from "./Client.type"
import { Supplement } from "./Supplement.type"

export type Reservation = {
    id: number
    tarif: number
    debut: Date
    fin: Date
    dateAjout: Date
    nbPersonne: number
    clientId: number
    client: Client
    supplement: Supplement[]
}

export type UpdateReservation = {
    tarif?: number
    debut?: Date
    fin?: Date
    nbPersonne?: number
    clientId?: number
    verif?: boolean
}