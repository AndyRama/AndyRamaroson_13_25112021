import React, { useEffect, useState } from 'react'
import Account from '../components/Account/Account'
import Header from '../components/Header/Header'
import { accountData } from '../services/data'
import { user } from '../utils/store'
import UpdateProfile from '../components/UpdateProfile/UpdateProfile'

function Profile() {
  useEffect(() => {
    document.title = 'Argent Bank | Profile'
    document.body.classList.remove('bg-dark')
  }, [])

  const [editProfile, setEditProfile] = useState(false)
  const HandleEditProfile = () => setEditProfile(true)
  return (
    <main className="main sign-in__profil bg-dark">
      {editProfile ? (
        <>
          {/* <h2 className="update-profile-name"> {user}</h2> */}
          <UpdateProfile
            setEditProfile={setEditProfile}
            editProfile={editProfile}
          />
          <h2 className="sr-only">Accounts</h2>
          {accountData.map((item) => (
            <Account
              key={item.id}
              title={item.title}
              amount={item.amount}
              description={item.description}
            />
          ))}
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
          <h2 className="sr-only">Accounts</h2>
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

export default Profile
