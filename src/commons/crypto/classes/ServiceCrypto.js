import AESCrypto from './AESCrypto'
import RSACrypto from './RSACrypto'
import DefaultCrypto from './DefaultCrypto'
import { getCryptoEncryptMethod, getCryptoDecryptMethod } from '../helpers'

export class ServiceCrypto {
  constructor (accesoPublico, accesoPrivado, accesoSimetrico, codigoAutentificacionHash) {
    this.cryptoMethod = {
      rsa: new RSACrypto(accesoPublico, accesoPrivado),
      aes: new AESCrypto(accesoSimetrico, codigoAutentificacionHash),
      keys: new AESCrypto(),
      default: new DefaultCrypto(),
    }
  }

  _isLeaf (value) {
    return !(typeof value === 'object')
  }

  encrypt (url, fields) {
    const params = {}
    for (const entry of Object.entries(fields)) {
      const [key, value] = entry

      if (this._isLeaf(value)) {
        const encryptMethod = getCryptoEncryptMethod(url, key)
        const cipher = this.cryptoMethod[encryptMethod]

        params[key] = cipher.encrypt(value)
      } else {
        params[key] = this.encrypt(url, value)
      }
    }
    return params
  }

  decrypt (url, fields) {
    const params = {}
    for (const entry of Object.entries(fields)) {
      const [key, value] = entry

      if (this._isLeaf(value)) {
        const decryptMethod = getCryptoDecryptMethod(url, key)
        const decipher = this.cryptoMethod[decryptMethod]

        params[key] = decipher.decrypt(value)
      } else {
        params[key] = this.decrypt(url, value)
      }
    }
    return params
  }
}

export default ServiceCrypto
