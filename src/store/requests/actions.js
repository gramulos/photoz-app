import { UPDATE_REQUEST_STATUS } from './types'

export const updateRequestStatus = (syncName, status, message) => ({
  type: UPDATE_REQUEST_STATUS,
  payload: {
    syncName,
    status,
    message,
  },
})
