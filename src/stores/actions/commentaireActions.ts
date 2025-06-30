import { Comment } from "../../types/Commentaire.type"

export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST"
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS"
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE"

export const getCommentsRequest = () => ({ type: GET_COMMENTS_SUCCESS })
export const getCommentsSuccess = (comments: Comment[]) => ({ type: GET_COMMENTS_SUCCESS, payload: comments })
export const getCommentsFailure = (error: string) => ({ type: GET_COMMENTS_FAILURE, error: error })