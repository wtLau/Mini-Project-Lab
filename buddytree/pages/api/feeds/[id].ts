import { feeds } from '../../../data'
import { FeedProps } from './index'
import type { NextApiResponse } from 'next'

interface AppProps { query: { id: number } }

export default function feedsHandler(
  { query: { id } }: AppProps,
  res: NextApiResponse
) {
  const filtered = feeds.filter(
    (p: FeedProps) => p.id.toString() === id.toString()
  )

  // Feed with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({
      message: `Feed with id: ${id} not found.`,
    })
  }
}
