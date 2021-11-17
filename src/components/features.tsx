/** @jsx jsx */

import { jsx, Box, Card, Flex, Heading } from 'theme-ui'
import Tipi from '../../assets/tipi.svg'
import Server from '../../assets/server.svg'
import Shield from '../../assets/shield.svg'

const imgStyle = {
  height: '10em', mb: '1em'
}

const cardStyle = {
  flex: '1 1',
  px: '4em',
  my: '2em',
  minWidth: '24em',
  textAlign: 'center' as const,
}


export const Features = () => (
    <Flex sx={{ flexWrap: 'wrap', mt: '2em' }}>
        <Card sx={{
            ...cardStyle,
            borderRight: '1px solid',
            borderColor: 'primary'
        }}>
            <Tipi sx={imgStyle} />
            <H>Independent Operation</H>
            Cardano Community contributors.<br />
            Supporting the testnets.<br />
            Plutus Pioneers.<br />
        </Card>
        <Card sx={{
          ...cardStyle,
            borderRight: '1px solid',
            borderColor: 'primary',
        }}>
            <Server sx={imgStyle} />
            <H>Dedicated Servers</H>
            Dedicaded hardware servers.<br />
            Additional backup servers.<br />
            1Gb/s connection.<br />
        </Card>
        <Card sx={cardStyle}>

                <Shield sx={imgStyle} />
                <H>Advanced Security</H>
                no root access on servers.<br />
                cryptographic key authorization.<br />
                ufw, fail2ban, vpc, dnssec.<br />
                no private keys on servers.<br />
        </Card>
    </Flex>
)

const H = ({ children }) => (
    <Heading as='h3' variant="text.h3">{children}</Heading>
)
