import { useState } from 'react'
import { getProxyToken } from '../network/lib/proxy'
import { getEncryptKeys } from '../network/lib/security'
import { SECURITY_ENCRYPTION_SYMMETRIC_KEY, SECURITY_ENCRYPTION_HMACKEY } from '../const'

export const useHeaders = () => {
  const [headersAreFetching, setHeadersAreFetching] = useState(false)

  const fetchHeaders = async () => {
    setHeadersAreFetching(true)
    try {
      const proxyToken = await getProxyToken()
      const keysForKeys = { accesoSimetrico: SECURITY_ENCRYPTION_SYMMETRIC_KEY, codigoAutentificacionHash: SECURITY_ENCRYPTION_HMACKEY }
      const keysResult = await getEncryptKeys(proxyToken, keysForKeys)
      const encryptKeys = keysResult.data.resultado

      return { proxyToken, encryptKeys }
    } catch (error) {
      console.log(error)

      return {
        proxyToken: null,
        encryptKeys: null,
      }
    } finally {
      setHeadersAreFetching(false)
    }
  }

  return {
    headersAreFetching,
    fetchHeaders,
  }
}
