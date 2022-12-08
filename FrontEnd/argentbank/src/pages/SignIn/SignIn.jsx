import React, { useState } from 'react'
import axios from 'axios'
import IconUser from '../../components/Icons/IconUser'
import './SignIn.scss'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  // const [submitted, setSubmitted] = useState(false)
  const noEmail = !email
  const noPassword = !password

  const handleChangeEmail = (event) => setEmail(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)
  const handleChangeRememberMe = () => setRememberMe(!rememberMe)

  const handleLogin = (event) => {
    event.preventDefault()
    const emailError = document.querySelector('.email.error-input')
    const passwordError = document.querySelector('.password.error-input')
    axios({
      method: 'post',
      url: 'http://localhost:4001/api/v1/user/login',
      data: {
        email,
        password,
      },
    })
      .then((result) => {
        if (result.data.error) {
          emailError.innerHTML = result.data.error.email
          passwordError.innerHTML = result.data.error.password
        } else {
          // console.log(result.data.body)
          const token = result.data.body
          console.log(token)
          // token Ok => redirect to updateProfile instead of /profil
          // save token localstorage => utils/store
          // edit user firstname/lastname
          //create a newProfile and now redirect to /profil OK
          window.location = '/profil'
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <main className="main sign-in bg-dark">
      <section className="sign-in-content">
        <IconUser className="sign-in-icon" />
        {/* <i class="fa fa-user-circle"></i> */}
        <h1>Sign In</h1>
        <form action="" onSubmit={handleLogin} id="sign-in-form">
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              autoComplete="username"
              onChange={handleChangeEmail}
              value={email}
            />
            {noEmail && <small>Email is required</small>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangePassword}
              value={password}
            />
            {noPassword && <small>Password is required</small>}
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={handleChangeRememberMe}
              checked={rememberMe}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  )
}

export default SignIn
