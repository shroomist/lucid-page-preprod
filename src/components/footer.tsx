/** @jsx jsx */

import { jsx, Flex, Container } from 'theme-ui'

import Logo from '../../assets/logo-black.svg'
import { Social } from './social'

export const Footer = () => (
  <Flex sx={{
  }}>
    <Container sx={{
      textAlign: 'center'
    }}>
      <Social />
      <Logo sx={{
        width: '3em'
      }} />
    </Container>
  </Flex>
)
