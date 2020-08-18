import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import theme, { Text } from '../theme'

interface ButtonProps {
  variant: 'default' | 'primary' | 'transparent'
  label?: String
  onPress: () => void
  children?: ReactNode
}

const selectBackgroundColor = (variant: String) => {
  switch (variant) {
    case 'primary':
      return theme.colors.primary
    case 'transparent':
      return 'transparent'
    default:
      return theme.colors.grey
  }
}

const Button = ({ variant, label, onPress, children }: ButtonProps) => {
  const backgroundColor = selectBackgroundColor(variant)
  const color = variant === 'primary' ? 'white' : '#0C0D34'

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.label, { color }]}>{label}</Text>
      )}
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
