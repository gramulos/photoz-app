import React from 'react'
import { useHistory } from 'react-router-dom'
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
import auth from 'utils/auth'
import './navbar.scss'

function NavBar({ signOut, user }) {
  const history = useHistory()

  const handleSignOut = (e) => {
    e.preventDefault()
    auth.signOut()
    signOut()
    history.push('/sign-in')
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
          {user.username}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Navbar>
  )
}

export default NavBar
