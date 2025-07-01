import { getReservation } from "../../services/Reservations"
import { AppDispatch } from "../../types/Redux.type"
import { getReservationsFailure, getReservationsRequest, getReservationsSuccess } from "../actions/reservationAction"

export const getAllReservations = () => async (dispatch: AppDispatch) => {
  dispatch(getReservationsRequest())
  try {
    const result = await getReservation()
    dispatch(getReservationsSuccess(result))
  } catch (error: any) {
    dispatch(getReservationsFailure(error))
  }
}