import axios from "axios"
import { Comment } from "../types/Commentaire.type"

const API_KEY = process.env.REACT_APP_API_URL

export const getCommentaire = async () => {
  try {
    const response = await axios.get(`${API_KEY}/commentaires`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createCommentaire = async (payload: Comment) => {
  try {
    const response = await axios.post(`${API_KEY}/commentaires`, payload)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

