import React, { useContext } from 'react'
import {
  Navbar,
  NavbarBrand,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import Box from 'components/Box'
import Text from 'components/Text'
import { Logo } from 'components/Icons'
import { AuthContext } from 'components/Auth'
import './navbar.scss'

function NavBar() {
  const { setAuthStatus } = useContext(AuthContext)

  const signOut = (e) => {
    e.preventDefault()
    setAuthStatus(false)
  }

  return (
    <Navbar color="primary" className="nav-bar">
      <NavbarBrand href="/">
        <Box as="span" className="nav-bar__brand" centerVertically>
          <Logo size={36} color="white" className="mr-md-3" />{' '}
          <Text as="h4" className="m-0">
            PhotoZ
          </Text>
        </Box>
      </NavbarBrand>
      <Button color="success" className="ml-md-auto">
        Create new post
      </Button>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          John Doe
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={signOut}>Sign out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Navbar>
  )
}

export default NavBar
