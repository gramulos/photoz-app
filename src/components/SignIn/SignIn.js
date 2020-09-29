import React, { useState } from 'react'
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Text from 'components/Text'
import Box from 'components/Box'
import { Logo } from 'components/Icons'
import './signIn.scss'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Email: ${email}, Password: ${password}`)
  }

  return (
    <Box className="sign-in" centerVertically directionColumn>
      <Logo />
      <Text as="h1">PhotoZ</Text>
      <Card body className="p-4 mb-2">
        <Text as="h4" className="mb-4">
          Sing in
        </Text>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="signInEmail">Email</Label>
            <Input
              type="email"
              name="signInEmail"
              id="signInEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <Label for="signInPassword">Password</Label>
            <Input
              type="password"
              name="signInPassword"
              id="signInPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button color="link" className="px-0">
            Forgot password
          </Button>
          <Button type="submit" color="primary" className="float-right">
            Sign in
          </Button>
        </Form>
      </Card>
      <Button color="link">Sing up</Button>
    </Box>
  )
}

export default SignIn
