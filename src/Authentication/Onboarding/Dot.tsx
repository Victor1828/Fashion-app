import React from 'react'
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated'

const { View } = Animated
interface DotProps {
  index: number
  currentIndex: Animated.Node<number>
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  })

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  })

  return (
    <View
      style={{
        height: 8,
        width: 8,
        backgroundColor: '#2CB9B0',
        borderRadius: 4,
        margin: 4,
        opacity,
        transform: [{ scale }],
      }}
    />
  )
}

export default Dot
