import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from 'components/Auth'

function PrivteRoute({
  path,
  component: Component,
  layout: Layout = React.Fragment,
  ...rest
}) {
  const { isAuthenticated } = useContext(AuthContext)

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
