/** @jsx jsx */
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Button, jsx, Box, Heading, Grid, Themed } from 'theme-ui'

import HeroSvg from '../../assets/lines.svg'
import LucidGarden from '../../assets/lucid-garden.svg'
import { PoolInfo } from './pool-info'

export const Hero = () => {

  return (
    <div>
      <div sx={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1,
      }}>
        <HeroSvg
          style={{
            transform: "scale(1.3) translate(-10%, -5%)",
          }} />
      </div>

        <Box sx={{ minHeight: '83.5vh' }}>
          <Box sx={{
            ml: ['2em', '2em', '6em', '10em', '20em'],
            pt: [ '42%', '20%', '16%' ],
          }}>
            <LucidGarden sx={{
              width: ['12em', '18em', '20em', '22em']
            }} />
            <Box sx={{
                ml: [null, '8em', '9em'],
                mt: [null, '-1em'],
                pb: '2em'
            }}>
              <Heading >
                <Themed.em>Lucid</Themed.em> is a highly performant and resilient <br />
                Stake Pool for <Themed.em>Cardano blockchain</Themed.em>.
              </Heading>
            </Box>
            <AnchorLink to="#start-staking">
              <Button sx={{ borderRadius: '2em', px: '1em', cursor: 'pointer' }}>Start Staking</Button>
            </AnchorLink>
          </Box>
        </Box>
        <Box>
          <PoolInfo />
        </Box>


    </div>
  )

}

/*
*             <Button>Start Staking</Button> */
