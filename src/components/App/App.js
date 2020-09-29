import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'components/Home'
import SignIn from 'pages/SignIn'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App
