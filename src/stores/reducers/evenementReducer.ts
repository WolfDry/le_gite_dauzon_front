import { GET_EVENEMENT_FAILURE, GET_EVENEMENT_REQUEST, GET_EVENEMENT_SUCCESS } from "../actions/evenementAction";

const initialState = {
  evenements: [],
  loading: false,
  error: null
}

export const evenementReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_EVENEMENT_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_EVENEMENT_SUCCESS:
      return { ...state, loading: false, evenements: action.payload }
    case GET_EVENEMENT_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return initialState
  }
}