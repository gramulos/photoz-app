import { PENDING, SUCCESS, ERROR } from 'constants/request'

export const getRequest = (state, requestName) => state.requests[requestName]

export const isLoading = (state, requestName) => {
  const request = getRequest(state, requestName)
  return request && request.status === PENDING
}

export const isFailed = (state, requestName) => {
  const request = getRequest(state, requestName)
  return request && request.status === ERROR
}

export const isSuccessful = (state, requestName) => {
  const request = getRequest(state, requestName)
  return request && request.status === SUCCESS
}

export const getErrorMessage = (state, requestName) => {
  const request = getRequest(state, requestName)
  if (request && request.status === ERROR) {
    return request.message
  }
}
