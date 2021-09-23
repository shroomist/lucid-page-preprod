/** @jsx jsx */

import { jsx, Card, Heading, Themed, Flex, Box, Link } from 'theme-ui'
import AboutSvg from '../../assets/daedalus.svg'

export const StartStaking = () => (
  <Flex sx={{ alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
    <Box sx={{
      flex: '1 1 40%',
      ml: -250,
    }} >
      <AboutSvg sx={{ opacity: 0.85 }}/>
    </Box>
    <Card sx={{
      flex: '0 1 60%',
      minWidth: '15em',
      pl: [ '10%', null, '5%' ]

    }}>
      START STAKING
      <Heading variant="text.h2">Start staking with <b>Daedalus</b> wallet</Heading>
      <ol>
        <li>Download the official Cardano wallet from <Link href="https://daedaluswallet.io/">daedaluswallet.io</Link></li>
        <li>Allow some time for wallet to sync the chain</li>
        <li>Create and fund your account</li>
        <li>Delegate to the pool with the ticker <Themed.em>LUCID</Themed.em></li>
      </ol>
    </Card>

  </Flex>
)
