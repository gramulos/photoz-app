import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import FormContainer from 'components/FormContainer'
import Text from 'components/Text'
import { Logo } from 'components/Icons'

const SIGN_UP_FIELD_NAMES = {
  USERNAME: 'signUpUsername',
  EMAIL: 'signUpEmail',
  PASSWORD: 'signUpPassword',
}

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { elements } = e.target
    const data = {
      username: elements[SIGN_UP_FIELD_NAMES.USERNAME].value,
      email: elements[SIGN_UP_FIELD_NAMES.EMAIL].value,
      password: elements[SIGN_UP_FIELD_NAMES.PASSWORD].value,
    }
    console.log(data)
  }

  return (
    <FormContainer>
      <Logo />
      <Text as="h1">PhotoZ</Text>
      <Card body className="p-4 mb-2">
        <Text as="h4" className="mb-4">
          Sing up
        </Text>
        <Form id="signUpForm" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for={SIGN_UP_FIELD_NAMES.USERNAME}>Username</Label>
            <Input
              required
              type="text"
              name={SIGN_UP_FIELD_NAMES.USERNAME}
              id={SIGN_UP_FIELD_NAMES.USERNAME}
            />
          </FormGroup>
          <FormGroup>
            <Label for={SIGN_UP_FIELD_NAMES.EMAIL}>Email</Label>
            <Input
              required
              type="email"
              name={SIGN_UP_FIELD_NAMES.EMAIL}
              id={SIGN_UP_FIELD_NAMES.EMAIL}
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <Label for={SIGN_UP_FIELD_NAMES.PASSWORD}>Password</Label>
            <Input
              required
              minLength="6"
              type="password"
              name={SIGN_UP_FIELD_NAMES.PASSWORD}
              id={SIGN_UP_FIELD_NAMES.PASSWORD}
            />
          </FormGroup>
          <Button type="submit" color="primary" className="float-right">
            Sign up
          </Button>
        </Form>
      </Card>
      <Link to="/sign-in" className="mt-2">
        Sing in
      </Link>
    </FormContainer>
  )
}

export default SignUp
