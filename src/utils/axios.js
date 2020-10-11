import axios from 'axios'

const createInscance = () => {
  const token = localStorage.getItem('Token')
  let authHeader = {}

  if (token) {
    authHeader = {
      Authorization: `Bearer ${token}`,
    }
  }

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 3000,
    headers: {
      ...authHeader,
      responseType: 'application/json',
    },
  })
}

const instance = createInscance()

export const updateHeder = (key, value) =>
  (instance.defaults.headers.common[key] = value)

export const updateToken = (token) =>
  updateHeder('Authorization', `Bearer ${token}`)

export default instance
