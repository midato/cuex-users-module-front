import axios from 'axios'
import config from '../config'

export function fetchUsersByRole(role) {
  return axios.get(`${config.BASE_URL}/user/role/${role}`)
}
