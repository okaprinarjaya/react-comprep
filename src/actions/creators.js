import { CHANGE_THE_NAME, CHANGE_THE_EMAIL } from './types'

export function changeTheName(theName) {
  return {
    type: CHANGE_THE_NAME,
    theName
  }
}

export function changeTheEmail(theEmail) {
  return {
    type: CHANGE_THE_EMAIL,
    theEmail
  }
}
