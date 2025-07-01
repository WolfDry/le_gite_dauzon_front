import { Reservation } from "../../types/Reservation.type"

export const GET_RESERAVATION_REQUEST = "GET_RESERAVATION_REQUEST"
export const GET_RESERAVATION_SUCCESS = "GET_RESERAVATION_SUCCESS"
export const GET_RESERAVATION_FAILURE = "GET_RESERAVATION_FAILURE"

export const getReservationsRequest = () => ({ type: GET_RESERAVATION_REQUEST })
export const getReservationsSuccess = (reservations: Reservation[]) => ({ type: GET_RESERAVATION_SUCCESS, payload: reservations })
export const getReservationsFailure = (error: string) => ({ type: GET_RESERAVATION_FAILURE, error: error })