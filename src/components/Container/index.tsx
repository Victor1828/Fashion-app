import React, { ReactNode } from 'react'
import theme, { Box } from '../theme'
import { Image, Dimensions, StyleSheet, StatusBar } from 'react-native'

const { width } = Dimensions.get('window')
const aspectRatio = 750 / 1125
const height = width * aspectRatio

interface ContainerProps {
  children: ReactNode
  footer: ReactNode
}

const Container = ({ children, footer }: ContainerProps) => {
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={require('../../../assets/bg.png')}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={require('../../../assets/bg.png')}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          flex={1}
          backgroundColor="white"
          borderRadius="xl"
          borderTopLeftRadius={0}
        >
          {children}
        </Box>
        <Box height={200}>{footer}</Box>
      </Box>
    </Box>
  )
}

export default Container
