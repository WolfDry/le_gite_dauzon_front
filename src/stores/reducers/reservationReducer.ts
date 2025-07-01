import { CREATE_ASK_RESERAVATION_FAILURE, CREATE_ASK_RESERAVATION_REQUEST, CREATE_ASK_RESERAVATION_SUCCESS, GET_RESERAVATION_FAILURE, GET_RESERAVATION_REQUEST, GET_RESERAVATION_SUCCESS } from "../actions/reservationAction";

const initialState = {
  reservations: null,
  askReservation: null,
  loading: false,
  error: null
}

export const reservationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_RESERAVATION_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_RESERAVATION_SUCCESS:
      return { ...state, loading: false, reservation: action.payload }
    case GET_RESERAVATION_FAILURE:
      return { ...state, loading: false, error: action.payload }

    case CREATE_ASK_RESERAVATION_REQUEST:
      return { ...state, loading: true, error: null }
    case CREATE_ASK_RESERAVATION_SUCCESS:
      return { ...state, loading: false, askReservation: action.payload }
    case CREATE_ASK_RESERAVATION_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}