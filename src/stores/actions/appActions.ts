import { Dates, NbPersonne } from "../../types/App.type"

export const UPDATE_SELECTED_DATES_REQUEST = "UPDATE_SELECTED_DATES_REQUEST"
export const UPDATE_SELECTED_DATES_SUCCESS = "UPDATE_SELECTED_DATES_SUCCESS"
export const UPDATE_SELECTED_DATES_FAILURE = "UPDATE_SELECTED_DATES_FAILURE"

export const UPDATE_NB_PERSONNE_REQUEST = "UPDATE_NB_PERSONNE_REQUEST"
export const UPDATE_NB_PERSONNE_SUCCESS = "UPDATE_NB_PERSONNE_SUCCESS"
export const UPDATE_NB_PERSONNE_FAILURE = "UPDATE_NB_PERSONNE_FAILURE"

export const updateSelectedDatesRequest = () => ({ type: UPDATE_SELECTED_DATES_REQUEST })
export const updateSelectedDatesSuccess = (selectedDates: Dates) => ({ type: UPDATE_SELECTED_DATES_SUCCESS, payload: selectedDates })
export const updateSelectedDatesFailure = (error: string) => ({ type: UPDATE_SELECTED_DATES_REQUEST, error: error })

export const updateNbPersonneRequest = () => ({ type: UPDATE_NB_PERSONNE_REQUEST })
export const updateNbPersonneSuccess = (nbPersonne: NbPersonne[]) => ({ type: UPDATE_NB_PERSONNE_SUCCESS, payload: nbPersonne })
export const updateNbPersonneFailure = (error: string) => ({ type: UPDATE_NB_PERSONNE_REQUEST, error: error })