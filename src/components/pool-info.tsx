/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { useState, useEffect } from 'react'
import { Card, Link, Themed } from 'theme-ui'

const poolId = '0d7af673b35b05c292168bab17b1069493d2d10fe095071f355fd724'

type PoolSummary = {
  pledge: number,
  ticker: string,
  fee: number,
  rank: number,
  fixed: number,
  active_stake: number,
  pool_id: number,
}
const summaryUrl = (id: string): string => `https://js.adapools.org/pools/${id}/summary.json`
const getPoolData = (id: string) =>
  fetch(summaryUrl(id))
    .then(r => r.json())
    .then(({ data: {pledge, db_ticker, tax_ratio, rank, tax_fix, active_stake, pool_id}  }) =>
      ({pledge, ticker: db_ticker, fee: tax_ratio, rank, fixed: tax_fix, active_stake, pool_id}))

export const PoolInfo = () => {
  const [info, setInfo] = useState<PoolSummary>()
  useEffect(() => {
    getPoolData(poolId).then(setInfo)
  },[poolId])

  if (!info) return null

  return (

    <Card>
      <Themed.em>Fee: </Themed.em>{info.fee * 100}% <br/>
      <Themed.em>Stake: </Themed.em>{info.active_stake / 1000000000}k <br/>
      <Themed.em>Ticker: </Themed.em>{info.ticker} <br/>
      <Themed.em>Pool ID: </Themed.em>{info.pool_id} <br/>
      {/* - Rank: {info.rank} */}
      see on
      <Link href={`http://adapools.org/pool/${poolId}`}> adapools</Link>
      {/* - PoolId: <Link href="google.com">adapools</Link> */}

    </Card>
  )
}
