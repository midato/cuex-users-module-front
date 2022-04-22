import { useState, useEffect } from 'react'
import Cookie from 'js-cookie'
import { useIdle, useHeaders } from '../hooks'
import { login, refresh } from '../network/lib/auth'
import { storeJwtAndRenew, getExpireDate } from '../utils'
import { AESCrypto, RSACrypto } from '../../commons/crypto'

const REFRESH_THRESHOLD_IN_SECONDS = 10
const IDLE_MAX_TIME_IN_MILISECONDS = 60000

export const useSession = () => {
  const { fetchHeaders } = useHeaders()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [tokens, setTokens] = useState({ jwt: '', renew: '' })
  const [timeLeft, setTimeLeft] = useState(10000)
  const [tokenIsRefreshing, setTokenIsRefreshing] = useState(false)
  const { userIsActive } = useIdle({ timeToIdle: IDLE_MAX_TIME_IN_MILISECONDS })

  const storeUserData = (user, key) => {
    window.sessionStorage.setItem('user', JSON.stringify(user))
    window.sessionStorage.setItem('_k', key)
  }

  const removeDataInStorage = () => {
    window.sessionStorage.removeItem('user')
    window.sessionStorage.removeItem('_k')
    Cookie.remove('jwt')
    Cookie.remove('renew')
  }

  const getJwtRemainingTimeToExpire = (jwt) => {
    const actualDate = Date.now()
    const expireDate = getExpireDate(jwt)
    const remainingTimeInSeconds = Math.floor((expireDate - actualDate) / 1000)
    return remainingTimeInSeconds
  }

  useEffect(() => {
    if (!timeLeft) return
    if (!tokens.jwt) return

    const timeToExpire = getJwtRemainingTimeToExpire(tokens.jwt)
    setTimeLeft(timeToExpire)

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [tokens])

  useEffect(() => {
    const refreshJwt = async () => {
      try {
        setTokenIsRefreshing(true)
        if (!userIsActive) {
          logout()
          return
        }
        const { proxyToken, encryptKeys } = await fetchHeaders()
        const { tokenAcceso, tokenRenovacion } = await refresh(tokens.renew, proxyToken, encryptKeys)

        storeJwtAndRenew(tokenAcceso, tokenRenovacion)

        setTokens({
          jwt: tokenAcceso,
          renew: tokenRenovacion,
        })
      } catch (err) {
        console.log(err)
      } finally {
        setTokenIsRefreshing(false)
      }
    }

    if (timeLeft <= REFRESH_THRESHOLD_IN_SECONDS && !tokenIsRefreshing) {
      refreshJwt()
    }
  }, [timeLeft, tokenIsRefreshing])

  useEffect(() => {
    const refreshUser = async () => {
      try {
        setIsLoading(true)
        const storedJwt = Cookie.get('jwt')
        const storedRenew = Cookie.get('renew')
        const storedKey = window.sessionStorage.getItem('_k')
        const storedUser = JSON.parse(window.sessionStorage.getItem('user'))

        if (!storedUser || !storedKey) {
          removeDataInStorage()
          return
        }

        if (storedJwt) {
          const aesCrypto = new AESCrypto()
          const _key = aesCrypto.decrypt(storedKey)

          const rsaCrypto = new RSACrypto(null, _key)
          const decryptedName = rsaCrypto.decrypt(storedUser.nombre)
          const decryptedGenre = rsaCrypto.decrypt(storedUser.genero)
          const decryptedUser = { nombre: decryptedName, genero: decryptedGenre }

          setTokens({ jwt: storedJwt, renew: storedRenew })
          setUser(decryptedUser)
          return
        }

        if (storedRenew) {
          const { proxyToken, encryptKeys } = await fetchHeaders()
          const { tokenAcceso, tokenRenovacion } = await refresh(storedRenew, proxyToken, encryptKeys)

          const aesCrypto = new AESCrypto()
          const _key = aesCrypto.decrypt(storedKey)

          const rsaCrypto = new RSACrypto(null, _key)

          const decryptedName = rsaCrypto.decrypt(storedUser.nombre)
          const decryptedGenre = rsaCrypto.decrypt(storedUser.genero)

          const decryptedUser = { nombre: decryptedName, genero: decryptedGenre }

          storeJwtAndRenew(tokenAcceso, tokenRenovacion)

          setTokens({ jwt: tokenAcceso, renew: tokenRenovacion })
          setUser(decryptedUser)
        }
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    if (!tokens.jwt) {
      refreshUser()
    }
  }, [tokens])

  const logout = () => {
    setUser(null)
    setTokens({ jwt: '', renew: '' })
    removeDataInStorage()
  }

  const localLogin = async (username, password) => {
    try {
      setIsLoading(true)
      const { proxyToken, encryptKeys } = await fetchHeaders()
      const { accesoPublico, accesoPrivado } = encryptKeys

      const response = await login(username, password, proxyToken, encryptKeys)
      const rsaCrypto = new RSACrypto(accesoPublico, accesoPrivado)
      const aesCrypto = new AESCrypto()

      const { tokenAcceso, tokenRenovacion, usuario } = response.data.resultado
      const decryptedUser = { nombre: usuario.nombre, genero: usuario.genero }

      const encryptedName = rsaCrypto.encrypt(usuario.nombre)
      const encryptedGenre = rsaCrypto.encrypt(usuario.genero)
      const encryptedUser = { nombre: encryptedName, genero: encryptedGenre }

      const encryptedKey = aesCrypto.encrypt(accesoPrivado)

      storeJwtAndRenew(tokenAcceso, tokenRenovacion)
      storeUserData(encryptedUser, encryptedKey)

      setUser(decryptedUser)
      setTokens({ jwt: tokenAcceso, renew: tokenRenovacion })
      return true
    } catch (err) {
      removeDataInStorage()
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    user,
    jwt: tokens.jwt,
    isLoading,
    login: localLogin,
    logout,
  }
}
