/** @jsx jsx */

import { jsx, Card, Heading, Themed, Flex, Box } from 'theme-ui'
import AboutSvg from '../../assets/our-mission.svg'

export const AboutMission = () => (
    <Flex sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
        <Card sx={{
          flex: '0 1 50%',
          minWidth: '20em',
          mr: [ '5%', null, '5%' ]
        }}>
            OUR MISSION
            <Heading variant="text.h2">Actively Contributing to securing the <b>network</b></Heading>
            Our aim at Lucid Garden is to become a valuable participant in the Cardano ecosystem and actively contribute to securing the network. For our stake pools, this means achieving high reliability and profitability with industry security standards, ensured by rizome.io high-performance hardware, multi-layer security, DDoS mitigation, and more.
        </Card>
        <Box sx={{
          flex: '1 1 30%',
            height: 400,
            display: 'relative',
            overflow: 'hidden'
        }} >
            <AboutSvg sx={{ transform: 'translate(130px, 130px) scale(1.5, 1.5)' }} />
        </Box>

    </Flex>
)
