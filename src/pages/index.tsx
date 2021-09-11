/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import { Container, Flex } from 'theme-ui'
import { Header } from '../components/header'
import { Seo } from '../components/seo'
import { Hero } from '../components/hero'
import { Features } from '../components/features'
import { Aboutus } from '../components/our-story'
import { AboutMission } from '../components/our-mission'

const IndexPage = () => {

  return (
    <>
      <Seo title=" " />
      <Header />
      <Container>
        <Hero/>

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
      </Container>
    </>
  )
}

export default IndexPage
