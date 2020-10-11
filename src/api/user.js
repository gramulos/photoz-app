import { makeRequest } from 'store/requests/service'

export const signUp = (username, email, hashedPassword) =>
  makeRequest('signUp', {
    url: '/auth/users',
    method: 'post',
    data: {
      username,
      email,
      hashedPassword,
    },
  })

export const signIn = (email, hashedPassword) =>
  makeRequest('signIn', {
    url: '/auth/session',
    method: 'post',
    data: {
      email,
      hashedPassword,
    },
  })

export const getUserInfo = () =>
  makeRequest('getUserInfo', {
    url: '/users/self',
    method: 'get',
  })
