import webcrypto from 'webcrypto'
import { SYMMETRIC_ALGORITHM, SECURITY_ENCRYPTION_SYMMETRIC_KEY, SECURITY_ENCRYPTION_HMACKEY } from '../../const/env'

const UTF_8 = 'utf-8'
const BASE64 = 'base64'
const hashingAlgorithm = 'SHA256'

export class AESCrypto {
  constructor (accesoSimetrico = SECURITY_ENCRYPTION_SYMMETRIC_KEY, codigoAutentificacionHash = SECURITY_ENCRYPTION_HMACKEY) {
    this.accesoSimetrico = accesoSimetrico
    this.codigoAutentificacionHash = codigoAutentificacionHash
  }

  generateHash (text, key, algorithm) {
    return webcrypto.createHmac(algorithm, key).update(text).digest()
  }

  getHMACLength (algorithm, key) {
    const keyBuffered = Buffer.from(key, BASE64)

    const hmacInstance = webcrypto.createHmac(algorithm, keyBuffered).digest()

    return hmacInstance.length
  }

  encrypt (value) {
    const base64Key = this.accesoSimetrico
    const hmacBase64Key = this.codigoAutentificacionHash

    try {
      const iv = webcrypto.randomBytes(16)

      const hmacBufferKey = Buffer.from(hmacBase64Key, BASE64)

      const cipher = webcrypto.createCipheriv(SYMMETRIC_ALGORITHM, Buffer.from(base64Key, BASE64), iv)

      const encryptValue = Buffer.concat([cipher.update(Buffer.from(value, UTF_8)), cipher.final()])

      const ivCipherText = Buffer.concat([iv, encryptValue])

      const hmacValue = this.generateHash(ivCipherText, hmacBufferKey, hashingAlgorithm)

      const ivCipherTextHmac = Buffer.concat([ivCipherText, hmacValue])

      return ivCipherTextHmac.toString(BASE64)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  decrypt (value) {
    const base64Key = this.accesoSimetrico
    const hmacBase64Key = this.codigoAutentificacionHash

    try {
      const ivLength = 16

      const ivCipherTextHmac = Buffer.from(value, BASE64)

      const aesKey = Buffer.from(base64Key, BASE64)

      const hmacKey = Buffer.from(hmacBase64Key, BASE64)

      const macLength = this.getHMACLength(hashingAlgorithm, hmacBase64Key)

      const ivCipherTextLength = ivCipherTextHmac.length - macLength

      const iv = ivCipherTextHmac.slice(0, ivLength)
      const ivCipherText = ivCipherTextHmac.slice(0, ivCipherTextLength)
      const cipherText = ivCipherTextHmac.slice(ivLength, ivCipherTextLength)

      const hmacReceive = ivCipherTextHmac.slice(ivCipherTextLength, value.length).toString(BASE64)

      const hmacGenerated = this.generateHash(ivCipherText, hmacKey, hashingAlgorithm).toString(BASE64)

      if (hmacReceive !== hmacGenerated) {
        throw new Error('Error en la desencriptacion')
      }

      const decipher = webcrypto.createDecipheriv(SYMMETRIC_ALGORITHM, aesKey, iv)

      let decrypted = decipher.update(cipherText)
      decrypted = Buffer.concat([decrypted, decipher.final()])

      const result = decrypted.toString(UTF_8)
      return result
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

export default AESCrypto
