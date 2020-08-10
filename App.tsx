import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './src/Authentication/Onboarding'

const AuthenticationStack = createStackNavigator()
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  )
}

export default App
