import { Comment } from "../../types/Commentaire.type"

export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST"
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS"
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE"

export const getCommentsRequest = () => ({ type: GET_COMMENTS_SUCCESS })
export const getCommentsSuccess = (comments: Comment[]) => ({ type: GET_COMMENTS_SUCCESS, payload: comments })
export const getCommentsFailure = (error: string) => ({ type: GET_COMMENTS_FAILURE, error: error })

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST"
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS"
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE"

export const addCommentRequest = () => ({ type: ADD_COMMENT_SUCCESS })
export const addCommentSuccess = (comment: Comment) => ({ type: ADD_COMMENT_SUCCESS, payload: comment })
export const addCommentFailure = (error: string) => ({ type: ADD_COMMENT_FAILURE, error: error })