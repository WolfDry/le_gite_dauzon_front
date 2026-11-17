import { GET_RESERAVATION_FAILURE, GET_RESERAVATION_REQUEST, GET_RESERAVATION_SUCCESS } from "../actions/reservationAction";

const initialState = {
  reservations: [],
  loading: false,
  error: null
}

export const reservationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_RESERAVATION_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_RESERAVATION_SUCCESS:
      return { ...state, loading: false, reservations: action.payload }
    case GET_RESERAVATION_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
