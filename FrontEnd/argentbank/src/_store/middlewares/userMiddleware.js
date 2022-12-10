import axios from 'axios'
import { profileUrl } from '../../utils/apiUrls'
import {
  setValueToSessionStorage,
  setValueToLocalStorage,
} from '../../utils/store'

import { editSuccess, editFailure } from '../actions/userActions'

import { token } from '../../utils/store'

/**
 * PUT NEW USER NAME in API
 * @param   {string}  firstName   [new user firstName]
 * @param   {string}  lastName    [new user lastName]
 * @returns
 */

export function newProfile(firstName, lastName) {
  return (dispatch) => {
    axios
      .put(
        profileUrl,
        { firstName, lastName },
        { headers: { Authorization: `bearer ${token}` } }
      )
      .then((response) => {
        sessionStorage.length !== 0
          ? setValueToSessionStorage(
              'USER',
              `${response.data.body.firstName} ${response.data.body.lastName}`
            )
          : setValueToLocalStorage(
              'USER',
              `${response.data.body.firstName} ${response.data.body.lastName}`
            )

        window.location.reload()

        dispatch(editSuccess(firstName, lastName))
      })
      .catch((error) => {
        dispatch(editFailure(error.message))
      })
  }
}
