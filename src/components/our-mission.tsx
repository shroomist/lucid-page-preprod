/** @jsx jsx */

import { jsx, Card, Heading, Flex, Box, Themed } from 'theme-ui'
import AboutSvg from '../../assets/our-mission.svg'

export const AboutMission = () => (
  <Flex sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
    <Card sx={{
      flex: '0 1 50%',
      minWidth: '15em',
      mr: ['5%', null, '5%']
    }}>
      OUR MISSION
      <Heading variant="text.h2">Actively Contributing to securing the <b>network</b></Heading>
      Our aim at Lucid Garden is to become a valuable participant in the Cardano ecosystem and actively contribute to securing the network.
      For our stake pools, this means achieving high reliability and profitability with industry security standards, ensured by rizome.io
      high-performance hardware, multi-layer security, DDoS mitigation, and more.
      <br /><br />
      <Themed.em>Lucid Pool</Themed.em> represents the fruition of hard work
      and scrupulous study that lead us to our core values.
      After a long journey of dedication, we are excited to offer
      an exceptional user experience that breathes life into paradigm-shifting ideas.
    </Card>
    <Box sx={{
      flex: '1 1 30%',
      mt: '10%',
      height: '80%',
      display: 'relative',
    }} >
      <AboutSvg sx={{ transform: 'translate(150px, 130px) scale(1.5, 1.5)' }} />
    </Box>
  </Flex>
)
