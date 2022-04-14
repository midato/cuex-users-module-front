import { fetchAllEntities, fetchApiToken, fetchUsersByRole } from "../services/user.service"

export const GET_ALL_USERS_BY_ROLE_INIT = 'GET_ALL_USERS_BY_ROLE_INIT'
export const GET_ALL_USERS_BY_ROLE_SUCCESS = 'GET_ALL_USERS_BY_ROLE_SUCCESS'
export const GET_ALL_USERS_BY_ROLE_ERROR = 'GET_ALL_USERS_BY_ROLE_ERROR'
export const CHECK_IF_USER_IS_LOGGED_IN = 'CHECK_IF_USER_IS_LOGGED_IN'
export const GET_ALL_ENTITIES_INIT = 'GET_ALL_ENTITIES_INIT'
export const GET_ALL_ENTITIES_SUCCESS = 'GET_ALL_ENTITIES_SUCCESS'
export const GET_ALL_ENTITIES_ERROR = 'GET_ALL_ENTITIES_ERROR'
export const GET_API_TOKEN_INIT = 'GET_API_TOKEN_INIT'
export const GET_API_TOKEN_SUCCESS = 'GET_API_TOKEN_SUCCESS'
export const GET_API_TOKEN_ERROR = 'GET_API_TOKEN_ERROR'

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

export function getAllEntities(method, url) {
  return async (dispatch, getState) => {
    // const state = getState()
    try {
      dispatch({ type: GET_ALL_ENTITIES_INIT })
      const result = await fetchAllEntities(method, url)
      console.log(result)
      dispatch({ type: GET_ALL_ENTITIES_SUCCESS, entities: [...result.data] })
    } catch (e) {
      console.log('getAllEntities: error: ', e)
      dispatch({ type: GET_ALL_ENTITIES_ERROR })
    }
  }
}

export function getApiToken(method, url) {
  return async (dispatch, getState) => {
    // const state = getState()
    try {
      dispatch({ type: GET_API_TOKEN_INIT })
      const result = await fetchApiToken(method, url)
      console.log(result)
      dispatch({ type: GET_API_TOKEN_SUCCESS, data: {...result.data} })
    } catch (e) {
      console.log('getApiToken: error: ', e)
      dispatch({ type: GET_API_TOKEN_ERROR })
    }
  }
}
