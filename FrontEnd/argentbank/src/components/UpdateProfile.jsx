import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newProfile } from './../_store/middlewares/userMiddleware'
import IconUser from './Icons/IconUser'

import Profil from '../pages/Profil'

export default function User(props) {
  useEffect(() => {
    document.title = 'Argent Bank | Update Profile'
  }, [])

  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  // handleSubmit
  // HandleEChangeFirstName
  // changeProfile
  // HandleEditProfile

  return (
    <>
      {props.editProfile ? (
        <section className="update-profile-content">
          <IconUser />
          <h1>Update profile</h1>
          <form action="" onSubmit={handleSubmit}>
            {' '}
            id="update-profil-form
          </form>
          <div className="input-wrapper">
            <label htmlFor="FirstName">FirstName</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={HandleEChangeFirstName}
            />
            {changeProfile && !firstName && (
              <small className="input-error">First name id required</small>
            )}
          </div>
          <div className="input-wrapper">
            <label htmlFor="LastName">LastName</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={HandleEChangelastName}
            />
            {changeProfile && !lastName && (
              <small className="input-error">Last name id required</small>
            )}
          </div>
          <input className="update-profil-btn" type="submit" value="Save" />
          <input
            className="cancel-btn"
            type="btn"
            value="cancel"
            onClick={HandleEditProfile}
          />
        </section>
      ) : (
        <Profil />
      )}
    </>
  )
}
