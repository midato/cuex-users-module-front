import { fetchUsersByRole } from "../services/user.service"

export const GET_ALL_USERS_BY_ROLE_INIT = 'GET_ALL_USERS_BY_ROLE_INIT'
export const GET_ALL_USERS_BY_ROLE_SUCCESS = 'GET_ALL_USERS_BY_ROLE_SUCCESS'
export const GET_ALL_USERS_BY_ROLE_ERROR = 'GET_ALL_USERS_BY_ROLE_ERROR'
export const CHECK_IF_USER_IS_LOGGED_IN = 'CHECK_IF_USER_IS_LOGGED_IN'

export function getUsersByRole(roleId) {
  return async (dispatch, getState) => {
    // const state = getState()
    try {
      // dispatch({type: SHOW_LOADER})
      // console.log('u: loader begin')
      dispatch({ type: GET_ALL_USERS_BY_ROLE_INIT })
      const response = await fetchUsersByRole(roleId)
      // console.log(response)
      dispatch({ type: GET_ALL_USERS_BY_ROLE_SUCCESS, users: [...response.data.payload] })
      // dispatch({type: DISMISS_LOADER})
      // console.log('u: loader end')
    } catch (e) {
      console.log('getUsersByRole: error: ', e)
      dispatch({ type: GET_ALL_USERS_BY_ROLE_ERROR })
      // dispatch({type: DISMISS_LOADER})
    }
  }
}

export function checkIfUserIsLoggedIn() {
  return async dispatch => {
    const token = localStorage.getItem('t')
    const user = JSON.parse(localStorage.getItem('u'))
    dispatch({ type: CHECK_IF_USER_IS_LOGGED_IN, token, user })
  }
}
