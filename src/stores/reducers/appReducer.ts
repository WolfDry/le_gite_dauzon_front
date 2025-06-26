import { UPDATE_NB_PERSONNE_FAILURE, UPDATE_NB_PERSONNE_REQUEST, UPDATE_NB_PERSONNE_SUCCESS, UPDATE_SELECTED_DATES_FAILURE, UPDATE_SELECTED_DATES_REQUEST, UPDATE_SELECTED_DATES_SUCCESS } from "../actions/appActions";

const initialState = {
  selectedDates: null,
  nbPersonne: null,
  loading: false,
  error: null
}

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_SELECTED_DATES_REQUEST:
      return { ...state, loading: true, error: null }
    case UPDATE_SELECTED_DATES_SUCCESS:
      return { ...state, selectedDates: action.payload, loading: false }
    case UPDATE_SELECTED_DATES_FAILURE:
      return { ...state, error: action.payload, loading: false }

    case UPDATE_NB_PERSONNE_REQUEST:
      return { ...state, loading: true, error: null }
    case UPDATE_NB_PERSONNE_SUCCESS:
      return { ...state, nbPersonne: action.payload, loading: false }
    case UPDATE_NB_PERSONNE_FAILURE:
      return { ...state, error: action.payload, loading: false }

    default:
      return state
  }
}