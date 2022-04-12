import {
  CHECK_IF_USER_IS_LOGGED_IN,
  GET_ALL_USERS_BY_ROLE_ERROR,
  GET_ALL_USERS_BY_ROLE_INIT,
  GET_ALL_USERS_BY_ROLE_SUCCESS
} from '../actions/user.action'

export const initialState = {
  error: null,
  loading: false,
  role: null,
  user: {},
  users: []
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case CHECK_IF_USER_IS_LOGGED_IN:
      console.log(state)
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
    default:
      console.log(state)
      return state
  }
}
