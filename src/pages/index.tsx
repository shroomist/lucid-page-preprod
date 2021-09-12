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
import { Footer } from '../components/footer'

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
            mx: 'auto',
          }
        }} id="features">
          <Features />

        </Flex>

        <Flex sx={{
          bg: '#1c2426',
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
            ml: ['1em', '2em', '10em', '12em', '20em']
          }
        }} id="mission">
          <AboutMission />
        </Flex>

        <Flex sx={{
          minHeight: '100vh',
          bg: '#1c2426',
          justifyContent: 'center',
          alignItems: 'center'
        }} id="contact">
          <Footer />
        </Flex>
      </Container>
    </>
  )
}

export default IndexPage
