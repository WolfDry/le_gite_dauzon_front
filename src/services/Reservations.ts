import axios from "axios"
import { Reservation, UpdateReservation } from "../types/Reservation.type"

const API_KEY = process.env.REACT_APP_API_URL

export const getReservation = async () => {
  try {
    const response = await axios.get(`${API_KEY}/reservations`)
    return response.data    
  } catch (error) {
    console.error(error)
  }
}

export const getReservationById = async (id: number) => {
  try {
    const response = await axios.get(`${API_KEY}/reservations/${id}`)
    return response.data  
  } catch (error) {
    console.error(error)
  }
}

export const createReservation = async (payload: Reservation) => {
  try {
    const response = await axios.post(`${API_KEY}/reservations`, payload)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateReservation = async (payload:UpdateReservation, id: number) => {
  try {
    const response = await axios.patch(`${API_KEY}/reservations/${id}`, payload)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteReservation = async (id: number) => {
  try {
    const response = await axios.delete(`${API_KEY}/reservations/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}