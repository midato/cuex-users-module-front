import axios from 'axios'
import config from '../../config'
import axiosClient from '../../commons/network/apiClient'

export function fetchUsersByRole(role) {
  return axios.get(`${config.BASE_URL}/user/role/${role}`)
}

export const fetchAllEntities = async (method, url) => {
  const encryptKeys = null
  const headers = {
    Authorization: 'ry48938343455kkdjvviyyy',
    'x-id-acceso': '5909349jdsiduisebrrrbgggt'
  }

  const params = { value1: '1000', value2: 'V2' }

  const response = await axiosClient({
    method,
    url,
    data: params,
    headers,
    encryptKeys
  })

  return response
}

export const fetchApiToken = async (method, url) => {
  const encryptKeys = null
  const headers = {
    "Accept": "application/json",
    "api-token": "fp2JCg1G6pDIOsB3hkVLlHcRXc3HvIWussFjVTHBov1EjlNxWmGDFohjeuIaYfQxrRc",
    "user-email": "midato.mx@gmail.com"
  }

  const params = { value1: '1000', value2: 'V2' }

  const response = await axiosClient({
    method,
    url,
    data: params,
    headers,
    encryptKeys
  })

  return response
}
