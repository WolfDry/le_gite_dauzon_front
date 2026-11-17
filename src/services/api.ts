import axios from 'axios'

/** Client HTTP de l'API du gîte. Les erreurs remontent telles quelles : à l'appelant de les afficher. */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15_000,
})
