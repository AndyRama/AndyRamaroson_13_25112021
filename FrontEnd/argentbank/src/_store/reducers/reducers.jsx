import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  EDIT_SUCCESS,
  EDIT_FAILURE,
} from '../actions/_types'

import { user } from '../../utils/store'

const initialState = user
  ? {
      isAuth: true,
      user,
      firstName: user.split(' ')[0],
      lastName: user.split(' ')[1],
    }
  : { isAuth: false, user: null, firstName: '', lastName: '' }

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload.user,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        user: null,
        error: payload.error,
      }
    default:
      return state
  }
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case EDIT_SUCCESS:
      return {
        ...state,
        firstName: payload.firstName ? payload.firstName : state.firstName,
        lastName: payload.lastName ? payload.lastName : state.lastName,
      }

    case EDIT_FAILURE:
      return {
        ...state,
        isAuth: false,
        user: null,
        error: payload.error,
      }
    default:
      return state
  }
}
