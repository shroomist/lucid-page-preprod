/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import { Container, Card, Flex, Box, Themed, useThemeUI, Heading } from 'theme-ui'
import { Header } from '../components/header'
import { Seo } from '../components/seo'
import { PoolInfo } from '../components/pool-info'
import { Hero } from '../components/hero'
import { Features } from '../components/features'
import { Aboutus } from '../components/our-story'
import { AboutMission } from '../components/our-mission'

const st = {
  scrn: {
    minHeight: '100vh',
    "> div": {
      my: 'auto',
      mx: ['1em', '2em', '10em', '18em', '20em']
    }
  }
}

const IndexPage = () => {

  return (
    <>
      <Seo title=" " />
      <Header />
      <Container>
        <Hero st={st}/>

        <Flex sx={{
          minHeight: '100vh',
          ">div": {
            my: 'auto',
            mx: ['1em', '1em', '4em']
          }
        }} id="features">
          <Features />

        </Flex>

        <Flex sx={{
          minHeight: '100vh',
          ">div": {
            my: 'auto',
            mr: ['1em', '2em', '10em', '12em', '20em']
          }
        }} id="about">
          <Aboutus />
        </Flex>

        <Flex sx={{
          minHeight: '100vh',
          ">div": {
            my: 'auto',
            ml: ['1em', '2em', '10em', '12em', '20em']
          }
        }} id="about">
          <AboutMission />
        </Flex>

        <Flex sx={{ ...st.scrn }} id="pool">
          <Card>
            <Heading>
              Lucid stake pool
            </Heading>

            <PoolInfo />
            <Box onClick={() => navigator.clipboard.writeText('Copy this text to clipboard')}>
            </Box>
          </Card>
        </Flex>

      </Container>
    </>
  )
}

export default IndexPage
