import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import FlatLayout from 'layouts/FlatLayout'
import DashboardLayout from 'layouts/DashboardLayout'
import PrivateRoute from 'components/PrivateRoute'
import PublicRoute from 'components/PublicRoute'
import Home from 'components/Home'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import AuthContext from 'components/Auth'

function App() {
  return (
    <Router>
      <AuthContext>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            layout={DashboardLayout}
          />
          <PublicRoute path="/sign-in" component={SignIn} layout={FlatLayout} />
          <PublicRoute path="/sign-up" component={SignUp} layout={FlatLayout} />
        </Switch>
      </AuthContext>
    </Router>
  )
}

export default App
