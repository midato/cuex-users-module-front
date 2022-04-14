import axiosClient from '../apiClient'
import { KEYS_ENDPOINT } from '../../constants'

export const getEncryptKeys = async (proxyToken, keysForKeys) => {
  const headers = {
    Authorization: proxyToken
  }

  const response = await axiosClient({
    method: 'get',
    url: KEYS_ENDPOINT,
    headers,
    encryptKeys: keysForKeys
  })

  return response
}
