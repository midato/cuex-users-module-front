import Cookie from 'js-cookie'

export const decodeJwt = (jwt) => {
  const base64Url = jwt.split('.')[1]

  if (!base64Url) return null

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jwtPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))

  return jwtPayload
}

export const getExpireDate = (jwt) => {
  const decodedJwt = decodeJwt(jwt)

  const parsedDecodedJwt = JSON.parse(decodedJwt)
  const { exp } = parsedDecodedJwt
  const expireDate = new Date(exp * 1000)

  return expireDate
}

export const storeJwtAndRenew = (jwt, renew) => {
  const jwtExpireDate = getExpireDate(jwt)
  const renewExpireDate = getExpireDate(renew)
  Cookie.set('jwt', jwt, { expires: new Date(jwtExpireDate), secure: true })
  Cookie.set('renew', renew, { expires: new Date(renewExpireDate), secure: true })
}
