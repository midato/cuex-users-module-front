import axios from 'axios'
// import { BASE_URL, BASE_ENTITIES_URL } from '../constants'
import { BASE_ENTITIES_URL } from '../constants'
// import { ServiceCrypto } from '../crypto'

const axiosClient = axios.create({
  baseURL: BASE_ENTITIES_URL
})

/*
axiosClient.interceptors.request.use(request => {
  const encryptKeys = request.encryptKeys
  if (!encryptKeys) return request

  const { accesoPublico, accesoPrivado, accesoSimetrico, codigoAutentificacionHash } = encryptKeys

  const cipher = new ServiceCrypto(accesoPublico, accesoPrivado, accesoSimetrico, codigoAutentificacionHash)

  const cipherData = request.data ? cipher.encrypt(request.url, request.data) : null

  request.data = cipherData

  return request
})

axiosClient.interceptors.response.use(response => {
  const { encryptKeys } = response.config
  if (!encryptKeys) return response

  const { accesoPublico, accesoPrivado, accesoSimetrico, codigoAutentificacionHash } = encryptKeys
  const responseResultado = response.data.resultado || {}
  const url = response.config.url

  const decipher = new ServiceCrypto(accesoPublico, accesoPrivado, accesoSimetrico, codigoAutentificacionHash)
  console.log(`decipher: ${JSON.stringify(decipher)}`)
  console.log(`url: ${url}`)
  console.log(`responseResultado: ${JSON.stringify(responseResultado)}`)
  const decipherResultado = Object.entries(responseResultado).length ? decipher.decrypt(url, responseResultado) : null

  response.data.resultado = decipherResultado

  return response
})
*/

axiosClient.interceptors.request.use(request => {
  console.log('interceptor request')
  // request.headers['x-id-acceso'] = 'vhgdk8347idlfjsfggyyyi'
  return request
})

axiosClient.interceptors.response.use(response => {
  console.log('interceptor response')

  return response
})

export default axiosClient
