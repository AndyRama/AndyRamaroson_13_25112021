import React from "react";
import "./Login.scss"

function Login() {
  return (
    <main className="main sign-in bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form action="" id="sign-in-form">
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="text"
            id="email"
            value="email"
            autoComplete="username"
          />
          {/* {noEmail && <small>Email is required</small>} */}
          {/* {submitted && !email && <small>Email is required</small>} */}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value="password"
            autoComplete="current-password"
          />
          {/* {noPassword && <small>Password is required</small>} */}
          {/* {submitted && !password && <small>Password is required</small>} */}
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            // checked="rememberMe"ss
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <input type="submit" value="Sign In" className="sign-in-button" />
      </form>
    </section>
   
  </main>    
  )
}

export default Login