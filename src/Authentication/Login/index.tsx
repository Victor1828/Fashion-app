import React from 'react'
import Container from '../../components/Container'
import SocialLogin from './SocialLogin'
import { Box, Text } from '../../components/theme'
import Button from '../../components/Button'

const footer = (
  <>
    <SocialLogin />
    <Box alignItems="center">
      <Button variant="transparent" onPress={() => alert('Sign up')}>
        <Box flexDirection="row">
          <Text variant="body" color="white">
            Don't have an account?
          </Text>
          <Text variant="body" color="primary" marginLeft="s">
            Sign Up here
          </Text>
        </Box>
      </Button>
    </Box>
  </>
)

const Login = () => {
  return (
    <Container {...{ footer }}>
      <Box />
    </Container>
  )
}

export default Login
