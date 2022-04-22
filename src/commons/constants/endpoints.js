export const PROXY_ENDPOINT = '/oauth2/v1/token'
export const KEYS_ENDPOINT = '/elektra/criptomonedas/seguridad/v1/aplicaciones/llaves'
export const USER_ENDPOINT = {
  LOGIN: '/bancoazteca/divisas/portal/autenticacion-usuarios/v1/autenticacion',
  REFRESH: '/bancoazteca/divisas/portal/autenticacion-usuarios/v1/token/renovacion'
}
export const NOTIFICATIONS = {
  SEND: '/bancoazteca/divisas/portal/notifications/v1/otps/envios',
  RESEND: '/bancoazteca/divisas/portal/notifications/v1/otps/reenvios',
  VALIDATE: '/bancoazteca/divisas/portal/notifications/v1/otps/validaciones'
}
export const GEO = {
  TOKEN: '/getaccesstoken',
  COUNTRIES: '/countries/',
  STATES: '/states',
  CITIES: 'cities',
  ENTITIES: '/cp/entidades'
  // CITIES: 'cp/ciudades'
}
export const ONBOARD = {
  USER: ''
}
