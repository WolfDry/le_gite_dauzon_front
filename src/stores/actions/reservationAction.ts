import { AskReservation, Reservation } from "../../types/Reservation.type"

export const GET_RESERAVATION_REQUEST = "GET_RESERAVATION_REQUEST"
export const GET_RESERAVATION_SUCCESS = "GET_RESERAVATION_SUCCESS"
export const GET_RESERAVATION_FAILURE = "GET_RESERAVATION_FAILURE"

export const getReservationsRequest = () => ({ type: GET_RESERAVATION_REQUEST })
export const getReservationsSuccess = (reservations: Reservation[]) => ({ type: GET_RESERAVATION_SUCCESS, payload: reservations })
export const getReservationsFailure = (error: string) => ({ type: GET_RESERAVATION_FAILURE, error: error })

export const CREATE_ASK_RESERAVATION_REQUEST = "CREATE_ASK_RESERAVATION_REQUEST"
export const CREATE_ASK_RESERAVATION_SUCCESS = "CREATE_ASK_RESERAVATION_SUCCESS"
export const CREATE_ASK_RESERAVATION_FAILURE = "CREATE_ASK_RESERAVATION_FAILURE"

export const createAskReservationRequest = () => ({ type: CREATE_ASK_RESERAVATION_REQUEST })
export const createAskReservationSuccess = (reservation: AskReservation) => ({ type: CREATE_ASK_RESERAVATION_SUCCESS, payload: reservation })
export const createAskReservationFailure = (error: string) => ({ type: CREATE_ASK_RESERAVATION_FAILURE, error: error })