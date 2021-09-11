/** @jsx jsx */

import { jsx, Card, Heading, Themed, Flex, Box, Link } from 'theme-ui'
import AboutSvg from '../../assets/our-story.svg'

export const Aboutus = () => (
  <Flex sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
    <Box sx={{
      flex: '1 1 40%',
      ml: -40,
    }} >
      <AboutSvg/>
    </Box>
    <Card sx={{
      flex: '0 1 60%',
      minWidth: '20em',
      pl: [ '10%', null, '5%' ]

    }}>
        OUR STORY
      <Heading variant="text.h2"> <b>Hello!</b>  <br />This is Rizome -The <b>Lucid Pool</b> Team</Heading>
      We at <Link href="https://rizome.io">rizome.io</Link> align with the technological stack of the Cardano Foundation
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
    </Card>

  </Flex>
)
