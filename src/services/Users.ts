import axios from "axios"

const API_KEY = process.env.REACT_APP_API_URL

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_KEY}/users/login`, { email, password })
    return response.data
  } catch (error) {
    console.error(error)
  }
}