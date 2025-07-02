import { getEvenements } from "../../services/Evenements"
import { AppDispatch } from "../../types/Redux.type"
import { getEvenementsFailure, getEvenementsRequest, getEvenementsSuccess } from "../actions/evenementAction"

export const getAllEvenements = () => async (dispatch: AppDispatch) => {
  dispatch(getEvenementsRequest())
  try {
    const result = await getEvenements()
    dispatch(getEvenementsSuccess(result))
  } catch (error: any) {
    dispatch(getEvenementsFailure(error))
  }
}