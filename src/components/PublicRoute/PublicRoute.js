import React from 'react'
import { Route } from 'react-router-dom'

function PublicRoute({
  component: Component,
  layout: Layout = React.Fragment,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )
}

export default PublicRoute
