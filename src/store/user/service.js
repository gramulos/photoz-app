import sha256 from 'sha256'
import auth from 'utils/auth'
import * as userApi from 'api/user'
import * as actions from './actions'
import toaster from 'utils/toaster'

export const getLoggedUser = () => async (dispatch) => {
  const userInfo = await dispatch(userApi.getUserInfo())
  if (userInfo) {
    const { payload } = userInfo

    dispatch(actions.setLoggedUser(payload))
    return payload
  }
}

export const signIn = (email, password) => async (dispatch) => {
  const hashedPassword = sha256(password)
  const response = await dispatch(userApi.signIn(email, hashedPassword))

  if (response) {
    dispatch(actions.setLoggedUserToken(response.payload.token))
    auth.signIn(response.payload.token)
  }

  return await dispatch(getLoggedUser())
}

export const signUp = (username, email, password) => async (dispatch) => {
  const hashedPassword = sha256(password)
  const response = await dispatch(
    userApi.signUp(username, email, hashedPassword)
  )

  if (response) {
    toaster.success('User registered successfully')
  }
}
