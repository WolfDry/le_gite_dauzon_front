import { Evenement } from "../../types/Evenement.type"

export const GET_EVENEMENT_REQUEST = "GET_EVENEMENT_REQUEST"
export const GET_EVENEMENT_SUCCESS = "GET_EVENEMENT_SUCCESS"
export const GET_EVENEMENT_FAILURE = "GET_EVENEMENT_FAILURE"

export const getEvenementsRequest = () => ({ type: GET_EVENEMENT_REQUEST })
export const getEvenementsSuccess = (evenements: Evenement[]) => ({ type: GET_EVENEMENT_SUCCESS, payload: evenements })
export const getEvenementsFailure = (error: string) => ({ type: GET_EVENEMENT_FAILURE, error: error })