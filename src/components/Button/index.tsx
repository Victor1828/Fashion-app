import React from 'react'
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Text, Theme } from '../theme'
import { useTheme } from '@shopify/restyle'

interface ButtonProps {
  variant: 'default' | 'primary'
  label: String
  onPress: () => void
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>()
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.defaultButton
  const color = variant === 'primary' ? 'white' : '#0C0D34'

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  )
}

Button.defaultProps = { variant: 'default' }

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
})

export default Button
