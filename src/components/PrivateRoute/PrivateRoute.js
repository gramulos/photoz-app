import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from 'utils/auth'

function PrivteRoute({
  path,
  component: Component,
  layout: Layout = React.Fragment,
  user,
  getLoggedUser,
  ...rest
}) {
  const isAuthenticated = auth.isAuthenticated()
  console.log(isAuthenticated)

  useEffect(() => {
    if (isAuthenticated && user && !user.username) {
      getLoggedUser()
    }
  }, [getLoggedUser, isAuthenticated, user])

  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        return isAuthenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
            }}
          />
        )
      }}
    />
  )
}

export default PrivteRoute
