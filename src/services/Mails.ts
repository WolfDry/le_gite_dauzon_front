import axios from "axios"

const API_KEY = process.env.REACT_APP_API_URL

type Props = {
  name: string
  email: string
  message: string
}

export const sendMail = async (payload: Props) => {
  if (!payload.email || !payload.message || !payload.name) {
    return "Erreur"
  }
  const data = {
    subject: "autre",
    content: payload
  }
  try {
    const response = await axios.post(`${API_KEY}/mailgun`, data)
    return response.data
  } catch (error) {
    console.error(error)
    return "Erreur"
  }
}