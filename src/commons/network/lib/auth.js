import axiosClient from '../apiClient'
import { NOTIFICATIONS, ONBOARD, USER_ENDPOINT } from '../../constants'

export const login = async (username, password, proxyToken, encryptKeys) => {
  const { idAcceso } = encryptKeys

  const headers = {
    Authorization: proxyToken,
    'x-id-acceso': idAcceso
  }
  const params = { correoElectronico: username, contrasenia: password }

  const response = await axiosClient({
    method: 'post',
    url: USER_ENDPOINT.LOGIN,
    data: params,
    headers,
    encryptKeys
  })

  return response
}

export const refresh = async (refreshToken, proxyToken, encryptKeys) => {
  const { idAcceso } = encryptKeys

  const headers = {
    Authorization: proxyToken,
    'x-id-acceso': idAcceso
  }

  const params = { tokenRenovacion: refreshToken }

  const response = await axiosClient({
    method: 'post',
    url: USER_ENDPOINT.REFRESH,
    data: params,
    headers,
    encryptKeys
  })

  return response.data.resultado
}

export const sendOTPS = async (body, proxyToken, encryptKeys) => {
  const { idAcceso } = encryptKeys

  const headers = {
    Authorization: proxyToken,
    'x-id-acceso': idAcceso
  }

  try {
    const response = await axiosClient({
      method: 'post',
      url: NOTIFICATIONS.SEND,
      data: body,
      headers,
      encryptKeys
    })
    return response
  } catch (err) {
    return Promise.reject(err)
  }
}

export const resendOTPS = async (body, proxyToken, encryptKeys) => {
  const { idAcceso } = encryptKeys

  const headers = {
    Authorization: proxyToken,
    'x-id-acceso': idAcceso
  }

  try {
    const response = await axiosClient({
      method: 'post',
      url: NOTIFICATIONS.RESEND,
      data: body,
      headers,
      encryptKeys
    })
    return response
  } catch (err) {
    return Promise.reject(err)
  }
}

export const createUser = async (body, proxyToken, encryptKeys) => {
  const { idAcceso } = encryptKeys

  const headers = {
    Authorization: proxyToken,
    'x-id-acceso': idAcceso
  }

  try {
    const response = await axiosClient({
      method: 'post',
      url: ONBOARD.USER,
      data: body,
      headers,
      encryptKeys
    })
    return response
  } catch (err) {
    return Promise.reject(err)
  }
}


