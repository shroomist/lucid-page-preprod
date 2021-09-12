/** @jsx jsx */

import Tw from '../../assets/twitter.svg'
import Te from '../../assets/telegram.svg'
import Gh from '../../assets/github.svg'
import Yt from '../../assets/youtube.svg'
import Dc from '../../assets/discord.svg'
import Rz from '../../assets/rizome_icon.svg'

import { jsx, Flex, Link } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { FC } from 'react'

const withIcn = A => () => (
    <A style={{ fill: '#ccc', width: 30, margin: '1em' }} />
)

const nameToIconEl: Record<string, FC> = {
  twitter: withIcn(Tw),
  telegram: withIcn(Te),
  github: withIcn(Gh),
  youtube: withIcn(Yt),
  discord: withIcn(Dc),
  website: withIcn(Rz),
}

export const Social = () => {
  const { site: {siteMetadata: {social}} } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          social { name url }

        }
      }
    }
  `)
  return (
    <Flex>
      { Object.entries(nameToIconEl).map(([name, El]) => {
          return (
            <Link href={social.find(a => a.name == name ).url} target="blank">
            <El />
            </Link>
          )
        })}
    </Flex>
  )
}
