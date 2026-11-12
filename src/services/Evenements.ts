import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

export const getEvenements = async () => {
  try {
    const response = await axios.get(`${API_URL}/evenements`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

