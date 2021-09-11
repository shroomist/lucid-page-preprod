/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'

import React, { useState, useEffect } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import Tooltip from 'rc-tooltip'

const poolId = '0d7af673b35b05c292168bab17b1069493d2d10fe095071f355fd724'

type PoolSummary = {
  pledged: number,
  ticker: string,
  fee: number,
  rank: number,
  fixed: number,
  active_stake: number,
  pool_id: string,
  pool_id_bech32: string,
}
const summaryUrl = (id: string): string => `https://js.adapools.org/pools/${id}/summary.json`
const getPoolData = (id: string) =>
  fetch(summaryUrl(id))
    .then(r => r.json())
    .then(({ data: { pledged, db_ticker, tax_ratio, rank, tax_fix, active_stake, pool_id, pool_id_bech32 } }) =>
      ({ pledged, ticker: db_ticker, fee: tax_ratio, rank, fixed: tax_fix, active_stake, pool_id, pool_id_bech32 }))

export const PoolInfo = () => {
  const [info, setInfo] = useState<PoolSummary>()
  const [isCopiedId, setIsCopiedId] = useState(false)
  const [isCopiedIdBech32, setIsCopiedIdBech32] = useState(false)

  useEffect(() => {
    getPoolData(poolId).then(setInfo)
  }, [poolId])

  if (!info) return null

  return (

    <Grid columns={[7]} sx={{
      px: ['1em', '2em', '2em', '5em', '14em'],
      py: '2em',
      bg: 'rgba(32,40,43,80%)',
      borderTop: '1px solid #999',
      borderBottom: '1px solid #999',
    }}>
      <Box>
        Ticker: <br />
        {info.ticker}
      </Box>
      <Box>
        Fee: <br />
        {info.fee * 100}%
      </Box>
      <Box>
        Stake: <br />
        {Math.floor(info.active_stake / 1000000000)}k
      </Box>
      <Box>
        Fixed: <br />
        {info.fixed / 1000000}Ada
      </Box>
      <Box>
        Pledge: <br />
        {Math.floor(info.pledged / 1000000000)}k
      </Box>
      <Tooltip
        placement="top"
        overlay={<span>{isCopiedId ? 'copied!' : 'copy'}</span>}
      >
        <CopyToClipboard
          text={info.pool_id}
          onCopy={() => { setIsCopiedId(true); setIsCopiedIdBech32(false) }}
        >
          <Box sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
          }}>
            Pool ID: <br />
            {info.pool_id}
          </Box>
        </CopyToClipboard>
      </Tooltip>
      <Tooltip
        placement="top"
        overlay={<span>{isCopiedIdBech32 ? 'copied!' : 'copy'}</span>}
      >
        <CopyToClipboard
          text={info.pool_id_bech32}
          onCopy={() => { setIsCopiedIdBech32(true); setIsCopiedId(false) } }
        >
          <Box sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
          }}>
            Pool Bech <br />
            {info.pool_id_bech32}
          </Box>
        </CopyToClipboard>
      </Tooltip>

    </Grid>
  )
}
/* <Card>
*   <Themed.em>Fee: </Themed.em>{info.fee * 100}% <br />
*   <Themed.em>Stake: </Themed.em>{info.active_stake / 1000000000}k <br />
*   <Themed.em>Ticker: </Themed.em>{info.ticker} <br />
*   <Themed.em>Pool ID: </Themed.em>{info.pool_id} <br />
*   Rank: {info.rank}
*   see on
*   <Link href={`http://adapools.org/pool/${poolId}`}> adapools</Link>
*   PoolId: <Link href="google.com">adapools</Link> */
/* </Card> */
