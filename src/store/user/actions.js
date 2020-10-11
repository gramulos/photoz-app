import { SET_LOGGED_USER, SET_LOGGED_USER_TOKEN, SIGN_OUT } from './types'

export const setLoggedUserToken = (token) => ({
  type: SET_LOGGED_USER_TOKEN,
  payload: {
    token,
  },
})

export const setLoggedUser = (data) => ({
  type: SET_LOGGED_USER,
  payload: data,
})

export const signOut = () => ({
  type: SIGN_OUT,
})
