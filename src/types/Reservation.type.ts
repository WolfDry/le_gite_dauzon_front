export type Reservation = {
    tarif: number
    debut: Date
    fin: Date
    nbPersonne: number
    clientId: number
    nom?: string
    prenom?: string
    email?: string
    telephone?: string
    verif: boolean
}

export type UpdateReservation = {
    tarif?: number
    debut?: Date
    fin?: Date
    nbPersonne?: number
    clientId?: number
    verif?: boolean 
}