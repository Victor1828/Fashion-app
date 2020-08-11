import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import { Text } from '../../components/theme'

const { width, height } = Dimensions.get('window')

export const SLIDER_HEIGHT = 0.61 * height

interface SlideProps {
  title: String
  right?: boolean
}

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ]

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: 'white',
    textAlign: 'center',
  },
})

export default Slide
