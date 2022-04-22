import axiosClient from '../apiClient'
import { PROXY_ENDPOINT, PROXY_PWD, PROXY_USER } from '../../constants'

const formatBody = (details) => {
  let formBody = []

  for (const property in details) {
    const encodedKey = encodeURIComponent(property)
    const encodedValue = encodeURIComponent(details[property])
    formBody.push(encodedKey + '=' + encodedValue)
  }

  formBody = formBody.join('&')
  return formBody
}

export const getProxyToken = async () => {
  console.log(`PROXY_USER: ${PROXY_USER}`)
  console.log(`PROXY_PWD: ${PROXY_PWD}`)
  const normalizedToken = Buffer.from(`${PROXY_USER}:${PROXY_PWD}`).toString('base64')

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${normalizedToken}`
  }

  const details = {
    grant_type: 'client_credentials'
  }
  const formBody = formatBody(details)

  const response = await axiosClient({
    url: PROXY_ENDPOINT,
    method: 'post',
    data: formBody,
    headers,
    myCustomParam: 'test'
  })

  const token = `Bearer ${response?.data?.access_token}`

  return token
}
