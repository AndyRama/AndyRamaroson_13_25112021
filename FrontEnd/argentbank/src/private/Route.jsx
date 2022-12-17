import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { token } from './../utils/store'

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Navigate
            to={{
              pathName: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
// export default PrivateRoute
