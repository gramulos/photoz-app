import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import user from './user'
import requests from './requests'

const reducers = combineReducers({
  user,
  requests,
})

const middlewares = composeWithDevTools(applyMiddleware(reduxThunk))

const store = createStore(reducers, middlewares)

export default store
