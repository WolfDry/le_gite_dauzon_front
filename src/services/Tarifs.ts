import axios from "axios"

const API_KEY = process.env.REACT_APP_API_URL

export const getTarif = async () => {
  const response = await axios.get(`${API_KEY}/tarifs`)
  return response.data
}
