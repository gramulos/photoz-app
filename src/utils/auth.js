import jwtDecode from 'jwt-decode'
import { updateToken } from './axios'

class Auth {
  constructor(token) {
    this.token = token
  }

  signIn = (token) => {
    this.token = token
    localStorage.setItem('Token', token)
    updateToken(token)
  }

  signOut = () => {
    this.token = null
    localStorage.removeItem('Token')
    updateToken(null)
  }

  getToken = () => {
    return this.token || localStorage.getItem('Token')
  }

  isTokenValid = (token) => {
    if (!token) {
      return false
    }
    try {
      const decodedJwt = jwtDecode(token)
      const isValid = decodedJwt.exp >= Date.now() / 1000
      return isValid
    } catch (e) {
      return false
    }
  }

  isAuthenticated = () => {
    const token = this.getToken()
    const isTokenValid = this.isTokenValid(token)

    if (!isTokenValid) {
      this.signOut()
      return false
    }

    return true
  }
}

export default new Auth(localStorage.getItem('Token'))
