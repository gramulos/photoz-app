import { PENDING, SUCCESS, ERROR } from 'constants/request'
import axios from 'utils/axios'
import { updateRequestStatus } from './actions'

export const makeRequest = (
  syncName,
  { method, url, data, options = {} }
) => async (dispatch) => {
  dispatch(updateRequestStatus(syncName, PENDING))

  try {
    const response = await axios[method](
      url,
      method === 'get' ? { params: data, ...options } : data
    )

    dispatch(updateRequestStatus(syncName, SUCCESS))

    return response.data
  } catch (e) {
    const errorMessage = e.response ? e.response.data.error : e.message
    dispatch(updateRequestStatus(syncName, ERROR, errorMessage))
    return
  }
}
