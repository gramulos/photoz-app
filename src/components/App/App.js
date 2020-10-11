import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import FlatLayout from 'layouts/FlatLayout'
import DashboardLayout from 'layouts/DashboardLayout'
import PrivateRoute from 'containers/PrivateRoute'
import PublicRoute from 'components/PublicRoute'
import Home from 'components/Home'
import SignIn from 'containers/SignIn'
import SignUp from 'containers/SignUp'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <>
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover={false}
        />
      </>
    </Router>
  )
}

export default App
