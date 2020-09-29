import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

function Auth({ children }) {
  const [isAuthenticated, setAuthStatus] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default Auth
