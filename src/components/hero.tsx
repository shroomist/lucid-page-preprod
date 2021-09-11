/** @jsx jsx */
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

        <Box sx={{ minHeight: '90vh' }}>
          <Box sx={{
            mx: ['2em', '2em', '10em', '18em', '20em'],
            pt: [ '40%', '20%', '16%' ],
          }}>
            <LucidGarden sx={{
              width: ['15em', '20em', '24em', '30em']
            }} />
            <Box sx={{
                ml: [null, '10em', '12em'],
                mt: [null, '-2em'],
                pb: '4em'
            }}>
              <Heading >
                <Themed.em>Lucid</Themed.em> is a highly performant and resilient <br />
                Stake Pool for <Themed.em>Cardano blockchain</Themed.em>.
              </Heading>
            </Box>
            <Button>Start Staking</Button>
          </Box>
        </Box>
      <PoolInfo />


    </div>
  )

}

