import React from 'react'
import { connect } from 'react-redux'
import { changeTheName, changeTheEmail } from '../actions/creators'

export const supplyConfigMenubar = (configMenubar, TheComponent) => (props) => {
  return (
    <TheComponent {...props} menubar={configMenubar} />
  )
}

export const supplyConfigConstants = (configConstants, TheComponent) => (props) => {
  return (
    <TheComponent {...props} constants={configConstants} />
  )
}

export const supplyTheNameAttrStateObj = (TheComponent) => {
  return connect(
    (state) => {
      return {
        theName: state.theName
      }
    }
  )(TheComponent)
}

export const supplyCommonActionDispatchMethod = (TheComponent) => {
  return connect(
    (state) => {
      return {}
    },
    (dispatch) => {
      return {
        changeTheNameHandler: (theParam) => dispatch(changeTheName(theParam)),
        changeTheEmailHandler: (theParam) => dispatch(changeTheEmail(theParam))
      }
    }
  )(TheComponent)
}
