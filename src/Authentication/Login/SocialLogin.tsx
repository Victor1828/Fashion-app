import React, { ReactNode } from 'react'
import { Box } from '../../components/theme'
import AppleIcon from '../../../assets/icons/apple.svg'
import FacebookIcon from '../../../assets/icons/facebook.svg'
import GoogleIcon from '../../../assets/icons/google.svg'

interface SocialIconProps {
  children: ReactNode
}

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
      width={44}
      height={44}
      borderRadius="l"
      marginHorizontal="s"
    >
      {children}
    </Box>
  )
}

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <FacebookIcon width={20} height={20} />
      </SocialIcon>
      <SocialIcon>
        <GoogleIcon width={20} height={20} />
      </SocialIcon>
      <SocialIcon>
        <AppleIcon width={20} height={20} />
      </SocialIcon>
    </Box>
  )
}

export default SocialLogin
