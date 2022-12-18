import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { token } from './../utils/store'

export default function PrivateRoute({ children, ...rest }) {
  return (
    <React.Fragment
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Navigate
            to={{
              pathName: '/Login',
              state: { from: location },
            }}
          />
        )
      }
      // </React.Fragment>
    />
  )
}
