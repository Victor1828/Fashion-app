import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/Button'

interface SubslideProps {
  subtitle: String
  description: String
  last?: boolean
  onPress: () => void
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: '#0C0D34',
    textAlign: 'center',
  },
  description: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
})

export default Subslide