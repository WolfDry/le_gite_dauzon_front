import { getCommentaire } from "../../services/Commentaires"
import { AppDispatch } from "../../types/Redux.type"
import { getCommentsFailure, getCommentsRequest, getCommentsSuccess } from "../actions/commentaireActions"

export const getAllCommentaires = () => async (dispatch: AppDispatch) => {
  dispatch(getCommentsRequest())
  try {
    const result = await getCommentaire()
    dispatch(getCommentsSuccess(result))
  } catch (error: any) {
    dispatch(getCommentsFailure(error))
  }
}