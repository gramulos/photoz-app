import React from 'react'
import { Container } from 'reactstrap'
import NavBar from 'containers/NavBar'

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <NavBar />
      <Container>{children}</Container>
    </div>
  )
}

export default DashboardLayout
