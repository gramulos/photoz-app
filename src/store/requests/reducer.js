import { SIGN_OUT } from 'store/user/types'
import { UPDATE_REQUEST_STATUS } from './types'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_REQUEST_STATUS: {
      const { syncName, status, message } = payload

      return {
        ...state,
        [syncName]: {
          status,
          message,
        },
      }
    }
    case SIGN_OUT:
      return initialState
    default:
      return state
  }
}
