import axios from "axios"
import { AskReservation } from "../types/Reservation.type"

const API_KEY = process.env.REACT_APP_API_URL

export const getReservation = async () => {
  const response = await axios.get(`${API_KEY}/reservations/disponibilites`)
  return response.data
}

export const createReservationRequest = async (payload: AskReservation): Promise<{ id: number }> => {
  const response = await axios.post(`${API_KEY}/reservations/request`, payload)
  return response.data
}
