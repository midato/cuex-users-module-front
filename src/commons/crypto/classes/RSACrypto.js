import webcrypto from 'webcrypto'

const UTF_8 = 'utf-8'
const BASE64 = 'base64'

export class RSACrypto {
  constructor (accesoPublico, accesoPrivado) {
    this.accesoPublico = accesoPublico
    this.accesoPrivado = accesoPrivado
  }

  _toKeyWithPem (key, type) {
    let localKey = key

    if (!localKey) {
      return localKey
    }

    if (type === 'public') {
      localKey = '-----BEGIN PUBLIC KEY-----\n' + key + '\n-----END PUBLIC KEY-----'
    }

    if (type === 'private') {
      localKey = '-----BEGIN PRIVATE KEY-----\n' + key + '\n-----END PRIVATE KEY-----'
    }

    return localKey
  }

  encrypt (value) {
    try {
      const normalizedPublicKey = this._toKeyWithPem(this.accesoPublico, 'public')
      const bufferedValue = Buffer.from(value)

      return webcrypto
        .publicEncrypt(
          {
            key: normalizedPublicKey,
            padding: webcrypto.constants.RSA_PKCS1_PADDING,
          },
          bufferedValue
        )
        .toString(BASE64)
    } catch (err) {
      throw new Error('Error en la encriptacion', Promise.reject(err))
    }
  }

  decrypt (value) {
    try {
      const pemPrivateKey = this._toKeyWithPem(this.accesoPrivado, 'private')
      const bufferedValue = Buffer.from(value, BASE64)

      return webcrypto
        .privateDecrypt(
          {
            key: pemPrivateKey,
            padding: webcrypto.constants.RSA_PKCS1_PADDING,
          },
          bufferedValue
        )
        .toString(UTF_8)
    } catch (err) {
      console.log('Error en la desencriptacion')
    }
  }
}

export default RSACrypto
