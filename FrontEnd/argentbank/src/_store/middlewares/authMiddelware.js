import axios from 'axios'
import { loginUrl } from '../../utils/apiUrls'

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from '../actions/authActions'
import {
  setValueToSessionStorage,
  setValueToLocalStorage,
  clearLocalStorage,
  clearSessionStorage,
} from '../../utils/store'

/**
 * LOGIN SERVICE
 * fetch JWT & user data
 * handle user authentication
 * @param   {string}  email     [user email]
 * @param   {string}  password  [user password]
 * @returns {object}  response  [data {token, user first name, user last name} || undefined || error]
 */

export function login(email, password, remenberMe) {
  return (dispatch) => {
    axios
      .post(loginUrl, { email, password })
      .then((response) => {
        dispatch(loginSuccess(response.data.body))

        if (remenberMe) {
          setValueToLocalStorage('TOKEN', response.data.body.token)
          setValueToLocalStorage(
            'USER',
            `${response.data.body.user.firstName} ${response.data.body.user.lastName}`
          )
        }
        if (!remenberMe) {
          setValueToSessionStorage('TOKEN', response.data.body.token)
          setValueToSessionStorage(
            'USER',
            `${response.data.body.user.firstName} ${response.data.body.user.lastName}`
          )
        }
        window.location.replace('/profil')
      })
      .catch((error) => {
        dispatch(loginFailure(error.message))
      })
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(logoutSuccess())

    clearSessionStorage()
    clearLocalStorage()

    window.location.replace(`/`)
  }
}
