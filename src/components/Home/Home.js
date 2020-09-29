import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import { AuthContext } from 'components/Auth'

function Home() {
  const { setAuthStatus } = useContext(AuthContext)
  const signOut = (e) => {
    e.preventDefault()
    setAuthStatus(false)
  }

  return (
    <div>
      Welcome to Protected Home!
      <br />
      <Button onClick={signOut}>Sign out</Button>
    </div>
  )
}

export default Home
