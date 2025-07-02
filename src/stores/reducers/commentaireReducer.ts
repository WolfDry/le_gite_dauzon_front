import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, GET_COMMENTS_FAILURE, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS } from "../actions/commentaireActions";

const initialState = {
  commentaires: null,
  newCommentaire: null,
  loading: false,
  error: null
}

export const commentaireReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_COMMENTS_SUCCESS:
      return { ...state, loading: false, commentaires: action.payload }
    case GET_COMMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload }

    case ADD_COMMENT_REQUEST:
      return { ...state, loading: true, error: null }
    case ADD_COMMENT_SUCCESS:
      return { ...state, loading: false, newCommentaire: action.payload }
    case ADD_COMMENT_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}