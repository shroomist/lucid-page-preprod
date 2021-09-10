/** @jsx jsx */

import { jsx, Box, Card, Flex, Heading } from 'theme-ui'
import Tipi from '../../assets/tipi.svg'
import Server from '../../assets/server.svg'
import Shield from '../../assets/shield.svg'

export const Features = () => (
    <Flex sx={{ flexWrap: 'wrap', mt: '2em', fontSize: 2 }}>
        <Card sx={{
            flex: '1 1',
            px: '4em',
            my: '2em',
            minWidth: '15em',
            textAlign: 'center',
            borderRight: '1px solid',
            borderColor: 'primary'
        }}>
            <Tipi sx={{ height: 100, mb: '2em' }} />
            <H>Independent Operation</H>
            we value decentralization and encourage you to stake with smaller pools
        </Card>
        <Card sx={{
            flex: '1 1',
            px: '4em',
            my: '2em',
            minWidth: '15em',
            textAlign: 'center',
            borderRight: '1px solid',
            borderColor: 'primary',
        }}>
            <Server  sx={{ height: 100, mb: '2em' }}/>
            <H>Dedicated Servers</H>
            Ryzen 7 4800H - main servers, raspberry Pi - backup servers, 1Gb/s connection
        </Card>
        <Card sx={{
            flex: '1 1',
            px: '4em',
            my: '2em',
            minWidth: '15em',
            textAlign: 'center'
        }}>

          <Box>
            <Shield sx={{ height: 100, mb: '2em' }} />
            <H>Advanced Security</H>
            no root access, cryptographic key authorization, ufw, fail2ban, vpc, dnssec, no private keys on servers
          </Box>
        </Card>
    </Flex>
)

const H = ({children}) => (
  <Heading as='h3' variant="text.h3">{children}</Heading>
)
