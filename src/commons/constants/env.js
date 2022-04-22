export const BASE_ENTITIES_URL = process.env.REACT_APP_BASE_ENTITIES_URL
export const BASE_URL = process.env.REACT_APP_BASE_URL
export const PROXY_USER = process.env.REACT_APP_PROXY_USER
export const PROXY_PWD = process.env.REACT_APP_PROXY_PWD
export const SECURITY_ENCRYPTION_SYMMETRIC_KEY = process.env.REACT_APP_SECURITY_ENCRYPTION_SYMMETRIC_KEY
export const SECURITY_ENCRYPTION_HMACKEY = process.env.REACT_APP_SECURITY_ENCRYPTION_HMACKEY
export const SYMMETRIC_ALGORITHM = process.env.REACT_APP_SYMMETRIC_ALGORITHM
export const CURRENT_APP = process.env.CURRENT_APP

export default {
  BASE_URL: process.env.REACT_APP_BASE_URL,

  // AWS config
  AWS_REGION: process.env.REACT_APP_AWS_REGION,
  AWS_ACCESS_KEY_ID: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY_ID: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY_ID,
  AWS_RESOURCE_BUCKET: process.env.REACT_APP_AWS_RESOURCES_BUCKET,
  AWS_BUCKET: process.env.REACT_APP_AWS_BUCKET
}
