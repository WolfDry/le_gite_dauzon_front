import axios from "axios"
import { Evenement } from "../types/Evenement.type"

const API_URL = process.env.REACT_APP_API_URL

export const getEvenements = async () => {
  try {
    const response = await axios.get(`${API_URL}/evenements`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getEvenementById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/evenements/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createEvenement = async (payload: Evenement) => {
  try {
    const response = await axios.post(`${API_URL}/evenements`, payload)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateEvenement = async (payload: Evenement, id: number) => {
  try {
    const response = await axios.patch(`${API_URL}/evenements/${id}`, payload)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteEvenement = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/evenements/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}