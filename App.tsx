import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './src/Authentication/Onboarding'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/components/theme'
import Welcome from './src/Authentication/Welcome'
import { Routes } from './src/components/Navigation'
import Login from './src/Authentication/Login'

const AuthenticationStack = createStackNavigator<Routes>()
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
  </AuthenticationStack.Navigator>
)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
