import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      Welcome to Home!
      <br />
      <Link to="/sign-in">Sign in here</Link>
    </div>
  )
}

export default Home
