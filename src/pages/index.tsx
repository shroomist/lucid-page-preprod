/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import { Container, Card, Flex, Box, Themed, useThemeUI, Heading } from 'theme-ui'
import { Header } from '../components/header'
import { Seo } from '../components/seo'
import { PoolInfo } from '../components/pool-info'

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
  const { theme: {rawColors: {modes: {dark, light}}} } = useThemeUI()
  React.useEffect(() => {
    // const handleScroll = (e) => e.preventDefault()
    // document.addEventListener('scroll', handleScroll, { passive: false });
    // document.addEventListener('wheel', handleScroll, { passive: false });
    // document.addEventListener('touchmove', handleScroll, { passive: false });
     if(typeof window !== 'undefined' && window.document) {
       /* require('../bg.js') */
       /* Your script here... */
 }
    }

  )
  return (
    <>
      <Seo title=" " />
      <Header />
      <Container>
        <canvas id="stars" width="300" height="300" style={{ position: 'absolute', background: dark.bg, zIndex: -1 }} />
        <Flex sx={{ ...st.scrn, color: dark.text }}>
          <Card>
            <Heading>
              Architecture for <br />distributed ledger tech
            </Heading>
            <Heading sx={{ color: dark.text }}>
              We provide reliable design and infrastructure <br />
              solutions for projects powered by <Themed.em>blockchain</Themed.em>.
            </Heading>
          </Card>
        </Flex>

        <Flex sx={{ ...st.scrn, ...light }} id="about">
          <Card>
            <Heading>
              About Us
            </Heading>
            <p sx={{ fontSize: 3 }}>
              Rizome.io aligns with the technological stack of the Cardano Foundation
              that utilizes the practices and tools from the Cardano core codebase.
              We embrace and integrate rigorous testing, peer review and formal method
              in our development cycle to provide exceptional <Themed.em>resilience and security.</Themed.em>
              <br /><br />
              With over a decade of experience gained in software development and
              years actively involved in the blockchain space, we have proudly earned
              the expertise necessary for building and maintaining infrastructures
              for distributed and large-scale systems.
              <br /><br />
              Rizome.io represents the fruition of hard work
              and scrupulous study that lead us to our core values. We especially
              highlight the importance of <Themed.em>reproducible builds</Themed.em> and
              thorough <Themed.em>testability</Themed.em>.
              After a long journey of dedication, we are excited to offer
              an exceptional user experience that breathes life into paradigm-shifting ideas.
            </p>
          </Card>
        </Flex>


        <Flex sx={{ ...st.scrn, color: dark.text, bg: dark.bg }} id="vision">
          <Box>
            <Heading sx={{ color: dark.text }}>Our Vision</Heading>
            <Flex sx={{ flexWrap: 'wrap', mt: '2em' }}>
              <Card sx={{ flex: '1 1', mr: '4em', minWidth: '20em' }}>
                <Heading>Ideology</Heading>
                <p sx={{ fontSize: 3 }}>
                  We believe that a strong theoretical foundation and
                  forward-thinking planning skills are the bedrock for
                  a sustainable and reliable system. That is why we decided
                  to support the Cardano project - it follows formal specifications,
                  peer-reviewed protocols, and a scientific methodology in its
                  development.

                </p>
              </Card>
              <Card sx={{ flex: '1 1', minWidth: '20em' }}>
                <Heading>Reliability</Heading>
                <p sx={{ fontSize: 3 }}>
                  Rizome.io aligns with the technological stack
                  of the Cardano Foundation that utilizes the
                  practices and tools from the Cardano core codebase.
                  We embrace and apply these to our infrastructure
                  and tech solutions.
                </p>
              </Card>
            </Flex>
          </Box>
        </Flex>

        <Flex sx={{ ...st.scrn, ...light }} id="pool">
          <Card>
            <Heading>
              Lucid stake pool
            </Heading>

            <PoolInfo />
            <Box onClick={() => navigator.clipboard.writeText('Copy this text to clipboard')}>
            </Box>
            <Flex sx={{ flexWrap: 'wrap', mt: '2em' }}>
              <Card sx={{ flex: '1 1', mr: '2em', minWidth: '10em' }}>
                <Heading>Independent Operation</Heading>
                <p sx={{ fontSize: 3 }}>
                  value decentralization and encourage you to stake with smaller pools
                </p>
              </Card>
              <Card sx={{ flex: '1 1', mr: '2em', minWidth: '10em' }}>
                <Heading>Dedicated Servers</Heading>
                <p sx={{ fontSize: 3 }}>
                  Ryzen 7 4800H - main servers, raspberry Pi - backup servers, 1Gb/s connection
                </p>
              </Card>
              <Card sx={{ flex: '1 1', minWidth: '10em' }}>
                <Heading>Security</Heading>
                <p sx={{ fontSize: 3 }}>
                  no root access, cryptographic key authorization, ufw, fail2ban, vpc, dnssec, no private keys on servers
                </p>
              </Card>
            </Flex>
          </Card>
        </Flex>

        <Flex sx={{ alignItems: 'center', justifyContent: 'center', ...st.scrn, color: dark.text, bg: dark.bg }} id="contact">
          <Box>
            <Heading sx={{ color: dark.text }}>Newsletter</Heading>
            <p>We privide only valuable updates to our subscribers</p>
          </Box>
        </Flex>

      </Container>
    </>
  )
}

export default IndexPage
