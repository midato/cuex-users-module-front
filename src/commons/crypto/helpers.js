import { KEYS_ENDPOINT, NOTIFICATIONS, USER_ENDPOINT } from '../constants'

const ENCRYPT_ENDPOINTS = {
  [KEYS_ENDPOINT]: {},

  [USER_ENDPOINT.LOGIN]: {
    contrasenia: 'rsa',
    correoElectronico: 'rsa'
  },
  [USER_ENDPOINT.REFRESH]: {
    tokenRenovacion: null
  },
  [NOTIFICATIONS.SEND]: {
    correoElectronico: 'rsa',
    nombreUsuario: 'rsa'
  },
  [NOTIFICATIONS.RESEND]: {
    codigoEnvio: 'rsa',
    correoElectronico: 'rsa',
    nombreUsuario: 'rsa'
  },
  [NOTIFICATIONS.VALIDATE]: {
    codigoEnvio: 'rsa',
    codigoVerificacion: 'rsa',
    correoElectronico: 'rsa',
    nombreUsuario: 'rsa'
  }
}

const DECRYPT_ENDPOINTS = {
  [KEYS_ENDPOINT]: {
    idAcceso: null,
    accesoPrivado: 'keys',
    accesoPublico: 'keys',
    accesoSimetrico: 'keys',
    codigoAutentificacionHash: 'keys'
  },
  [USER_ENDPOINT.LOGIN]: {
    tokenAcceso: null,
    tokenAccesoExpiracion: null,
    tokenRenovacion: null,
    tokenRenovacionExpiracion: null,
    apellidoMaterno: 'rsa',
    apellidoPaterno: 'rsa',
    correoElectronico: 'rsa',
    genero: 'rsa',
    id: 'rsa',
    nombre: 'rsa'
  },
  [USER_ENDPOINT.REFRESH]: {
    tokenAcceso: null,
    tokenRenovacion: null
  },
  [NOTIFICATIONS.SEND]: {
    codigoEnvio: 'rsa',
    fechaExpiracion: 'rsa'
  },
  [NOTIFICATIONS.RESEND]: {
    codigoEnvio: 'rsa',
    fechaExpiracion: 'rsa'
  },
  [NOTIFICATIONS.VALIDATE]: {
    codigoEnvio: 'rsa'
  }
}

const CRYPTO_DEFAULT_METHOD = 'default'

export const getCryptoEncryptMethod = (endpoint, key) => {
  const encryptPropertiesSummary = ENCRYPT_ENDPOINTS[endpoint]
  const encryptMethod = encryptPropertiesSummary[key] || CRYPTO_DEFAULT_METHOD

  return encryptMethod
}

export const getCryptoDecryptMethod = (endpoint, key) => {
  const decryptPropertiesSummary = DECRYPT_ENDPOINTS[endpoint]
  const decryptMethod = decryptPropertiesSummary[key] || CRYPTO_DEFAULT_METHOD

  return decryptMethod
}
