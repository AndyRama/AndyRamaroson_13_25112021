import axios from 'axios'
import { profileUrl } from '../../utils/apiUrls'

import { editSucces, editFailure } from '../actions/userActions'

import { token } from '../../utils/storage'

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
      .then((reponse) => {})
  }
}
