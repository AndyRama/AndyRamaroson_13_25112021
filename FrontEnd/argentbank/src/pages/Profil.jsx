import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Account from '../components/Account/Account'
import Header from '../components/Header/Header'
import { accountData } from '../services/data'
import { user } from './../utils/store'
import UpdateProfile from '../components/UpdateProfil/UpdateProfile'

function Profil() {
  useEffect(() => {
    document.title = 'Argent Bank | Profile'
  }, [])

  const [editProfile, setEditProfile] = useState(false)
  const HandleEditProfile = () => setEditProfile(true)
  return (
    <main className="main sign-in__profil bg-dark">
      {editProfile ? (
        <>
          <h2 className="update-profile-name"> {user}</h2>
          <UpdateProfile
            setEditProfile={setEditProfile}
            editProfile={editProfile}
          />
        </>
      ) : (
        <>
          <Header fullName={user} />
          <input
            className="edit-button"
            type="submit"
            value="Edit Name"
            onClick={HandleEditProfile}
          />
          {accountData.map((item) => (
            <Account
              key={item.id}
              title={item.title}
              amount={item.amount}
              description={item.description}
            />
          ))}
        </>
      )}
    </main>
  )
}

export default Profil
