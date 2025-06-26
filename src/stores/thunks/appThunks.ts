import { Dates, NbPersonne } from "../../types/App.type";
import { AppDispatch } from "../../types/Redux.type";
import { updateNbPersonneFailure, updateNbPersonneRequest, updateNbPersonneSuccess, updateSelectedDatesFailure, updateSelectedDatesRequest, updateSelectedDatesSuccess } from "../actions/appActions";

export const updateSelectedDates = (dates: Dates) => async (dispatch: AppDispatch) => {
  dispatch(updateSelectedDatesRequest())
  try {
    dispatch(updateSelectedDatesSuccess(dates))
  } catch (error: any) {
    dispatch(updateSelectedDatesFailure(error))
  }
}

export const updateNbPersonne = (nbPersonne: NbPersonne[]) => async (dispatch: AppDispatch) => {
  dispatch(updateNbPersonneRequest())
  try {
    dispatch(updateNbPersonneSuccess(nbPersonne))
  } catch (error: any) {
    dispatch(updateNbPersonneFailure(error))
  }
}