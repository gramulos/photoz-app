import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
  Alert,
} from 'reactstrap'
import FormContainer from 'components/FormContainer'
import Text from 'components/Text'
import { Logo } from 'components/Icons'

const SIGN_IN_FIELD_NAMES = {
  EMAIL: 'signInEmail',
  PASSWORD: 'signInPassword',
}

const SignIn = ({ signIn, isLoading, signInError }) => {
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { elements } = e.target
    const email = elements[SIGN_IN_FIELD_NAMES.EMAIL].value
    const password = elements[SIGN_IN_FIELD_NAMES.PASSWORD].value

    const user = await signIn(email, password)

    if (user) {
      history.push('/')
    }
  }

  return (
    <FormContainer>
      <Logo />
      <Text as="h1">PhotoZ</Text>
      <Card body className="p-4 mb-2">
        <Text as="h4" className="mb-4">
          Sing in
        </Text>
        {signInError && <Alert color="danger">{signInError}</Alert>}
        <Form id="signInForm" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for={SIGN_IN_FIELD_NAMES.EMAIL}>Email</Label>
            <Input
              required
              type="email"
              name={SIGN_IN_FIELD_NAMES.EMAIL}
              id={SIGN_IN_FIELD_NAMES.EMAIL}
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <Label for={SIGN_IN_FIELD_NAMES.PASSWORD}>Password</Label>
            <Input
              required
              minLength="6"
              type="password"
              name={SIGN_IN_FIELD_NAMES.PASSWORD}
              id={SIGN_IN_FIELD_NAMES.PASSWORD}
            />
          </FormGroup>
          <Button color="link" className="px-0">
            Forgot password
          </Button>
          <Button
            type="submit"
            color="primary"
            className="float-right"
            disabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" color="light" /> : 'Sign in'}
          </Button>
        </Form>
      </Card>
      <Link to="/sign-up" className="mt-2">
        Sing up
      </Link>
    </FormContainer>
  )
}

export default SignIn
