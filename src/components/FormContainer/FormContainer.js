import React from 'react'
import Box from 'components/Box'
import './formContainer.scss'

function FormContainer({ children }) {
  return (
    <Box className="form-container" centerVertically directionColumn>
      {children}
    </Box>
  )
}

export default FormContainer
