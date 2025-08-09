import axios from "axios"
import { Client, UpdateClient } from "../types/Client.type"

const API_KEY = process.env.REACT_APP_API_URL

export const getClient = async () => {
  try {
    const response = await axios.get(`${API_KEY}/clients`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getClientById = async (id: number) => {
  try {
    const response = await axios.get(`${API_KEY}/clients/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createClient = async (payload: Client) => {
  try {
    const response = await axios.post(`${API_KEY}/clients`, payload)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateClient = async (payload: UpdateClient, id: number) => {
  try {
    const response = await axios.patch(`${API_KEY}/clients/${id}`, payload)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteClient = async (id: number) => {
  try {
    const response = await axios.delete(`${API_KEY}/clients/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}