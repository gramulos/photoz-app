import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import PublicRoute from 'components/PublicRoute'
import FlatLayout from 'layouts/FlatLayout'
import Home from 'components/Home'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import AuthContext from 'components/Auth'

function App() {
  return (
    <Router>
      <AuthContext>
        <Switch>
          <PrivateRoute exact path="/" component={Home} layout={FlatLayout} />
          <PublicRoute path="/sign-in" component={SignIn} layout={FlatLayout} />
          <PublicRoute path="/sign-up" component={SignUp} layout={FlatLayout} />
        </Switch>
      </AuthContext>
    </Router>
  )
}

export default App
