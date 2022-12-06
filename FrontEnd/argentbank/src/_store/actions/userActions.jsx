import { EDIT_SUCCESS, EDIT_FAILURE } from './_types'

export const editSucces = (firstName, lastName) => ({
  types: EDIT_SUCCESS,
  payload: firstName,
  lastName,
})

export const editFailure = (error) => ({
  types: EDIT_FAILURE,
  payload: error,
})
