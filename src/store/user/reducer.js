import auth from 'utils/auth'
import { SET_LOGGED_USER, SET_LOGGED_USER_TOKEN, SIGN_OUT } from './types'

const token = auth.getToken()
const initialState = token
  ? {
      token,
    }
  : null

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGGED_USER_TOKEN: {
      const { token } = payload
      return {
        token,
      }
    }
    case SET_LOGGED_USER: {
      return {
        ...state,
        ...payload,
      }
    }
    case SIGN_OUT: {
      return null
    }
    default: {
      return state
    }
  }
}
