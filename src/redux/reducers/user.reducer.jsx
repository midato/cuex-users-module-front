import {
  CHECK_IF_USER_IS_LOGGED_IN,
  GET_ALL_USERS_BY_ROLE_ERROR,
  GET_ALL_USERS_BY_ROLE_INIT,
  GET_ALL_USERS_BY_ROLE_SUCCESS,
  GET_ALL_ENTITIES_INIT,
  GET_ALL_ENTITIES_SUCCESS,
  GET_ALL_ENTITIES_ERROR,
  GET_API_TOKEN_INIT,
  GET_API_TOKEN_SUCCESS,
  GET_API_TOKEN_ERROR,
} from '../actions/user.action'

export const initialState = {
  error: null,
  loading: false,
  role: null,
  user: {},
  users: [],
  entities: []
}

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case CHECK_IF_USER_IS_LOGGED_IN:
      return {
        ...state,
        dataLoaded: true,
        isLoggedIn: action.token && action.user ? true : false,
        token: action.token,
        user: action.user
      }
    case GET_ALL_USERS_BY_ROLE_INIT:
      return { ...state, loading: true, users: [] }
    case GET_ALL_USERS_BY_ROLE_SUCCESS:
      return { ...state, users: [...action.users], loading: false }
    case GET_ALL_USERS_BY_ROLE_ERROR:
      return { ...state, loading: false, error: action.error }
    case GET_ALL_ENTITIES_INIT:
      return { ...state, loading: true, entities: [] }
    case GET_ALL_ENTITIES_SUCCESS:
      return { ...state, entities: [...action.entities], loading: false }
    case GET_ALL_ENTITIES_ERROR:
      return { ...state, loading: false, error: action.error }
    case GET_API_TOKEN_INIT:
      return { ...state, loading: true, data: [] }
    case GET_API_TOKEN_SUCCESS:
      return { ...state, data: {...action.data}, loading: false }
    case GET_API_TOKEN_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
