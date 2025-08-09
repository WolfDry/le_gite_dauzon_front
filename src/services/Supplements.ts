import axios from "axios"

const API_KEY = process.env.REACT_APP_API_URL

export const getSupplements = async () => {
  try {
    const response = await axios.get(`${API_KEY}/supplements`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}