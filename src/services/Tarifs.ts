import axios from "axios"
import { Tarif, UpdateTarif } from "../types/Tarif.type"

const API_KEY = process.env.REACT_APP_API_URL

export const getTarif = async () => {
  try {
    const response = await axios.get(`${API_KEY}/tarifs`)
    return response.data    
  } catch (error) {
    console.error(error)
  }
}

export const getTarifById = async (id: number) => {
  try {
    const response = await axios.get(`${API_KEY}/tarifs/${id}`)
    return response.data  
  } catch (error) {
    console.error(error)
  }
}

export const createTarif = async (payload: Tarif) => {
  try {
    const response = await axios.post(`${API_KEY}/tarifs`, payload)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateTarif = async (payload:UpdateTarif, id: number) => {
  try {
    const response = await axios.patch(`${API_KEY}/tarifs/${id}`, payload)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteTarif = async (id: number) => {
  try {
    const response = await axios.delete(`${API_KEY}/tarifs/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}