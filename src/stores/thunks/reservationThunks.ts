import { createReservation, createReservationRequest, getReservation } from "../../services/Reservations"
import { AppDispatch } from "../../types/Redux.type"
import { AskReservation } from "../../types/Reservation.type"
import { createAskReservationFailure, createAskReservationRequest, createAskReservationSuccess, getReservationsFailure, getReservationsRequest, getReservationsSuccess } from "../actions/reservationAction"

export const getAllReservations = () => async (dispatch: AppDispatch) => {
  dispatch(getReservationsRequest())
  try {
    const result = await getReservation()
    dispatch(getReservationsSuccess(result))
  } catch (error: any) {
    dispatch(getReservationsFailure(error))
  }
}

export const createAskReservation = (reservation: AskReservation) => async (dispatch: AppDispatch) => {
  dispatch(createAskReservationRequest())
  try {
    const result = await createReservationRequest(reservation)
    dispatch(createAskReservationSuccess(result))
    getAllReservations()
  } catch (error: any) {
    dispatch(createAskReservationFailure(error))
  }
}