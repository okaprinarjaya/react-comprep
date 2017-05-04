import { combineReducers } from 'redux'

import { CHANGE_THE_NAME, CHANGE_THE_EMAIL } from './actions/types'

function theName(state = 'Oka Prinarjaya', action) {
  if (action.type === CHANGE_THE_NAME) {
    return action.theName
  }

  return state
}

function theEmail(state = 'okaprinarjaya@gmail.com', action) {
  if (action.type === CHANGE_THE_EMAIL) {
    return action.theEmail
  }

  return state
}

const reducers = combineReducers({
  theName,
  theEmail
})

export default reducers
