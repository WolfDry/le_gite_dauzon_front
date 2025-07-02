import { createCommentaire, getCommentaire } from "../../services/Commentaires"
import { Comment } from "../../types/Commentaire.type"
import { AppDispatch } from "../../types/Redux.type"
import { addCommentFailure, addCommentRequest, addCommentSuccess, getCommentsFailure, getCommentsRequest, getCommentsSuccess } from "../actions/commentaireActions"

export const getAllCommentaires = () => async (dispatch: AppDispatch) => {
  dispatch(getCommentsRequest())
  try {
    const result = await getCommentaire()
    dispatch(getCommentsSuccess(result))
  } catch (error: any) {
    dispatch(getCommentsFailure(error))
  }
}

export const createComment = (payload: Comment) => async (dispatch: AppDispatch) => {
  dispatch(addCommentRequest())
  try {
    const result = await createCommentaire(payload)
    dispatch(addCommentSuccess(result))
    getAllCommentaires()
  } catch (error: any) {
    dispatch(addCommentFailure(error))
  }
}