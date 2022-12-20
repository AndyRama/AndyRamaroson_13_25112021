import React from 'react'
import { user } from '../utils/store'
import { Navigate } from 'react-router-dom'
import Profile from '../pages/Profile'

function AuthCheck() {
  return user ? <Profile /> : <Navigate to="/Login" />
}

export default AuthCheck
