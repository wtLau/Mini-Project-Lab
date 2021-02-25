import { feeds } from '../../../data'
import type { NextApiRequest, NextApiResponse } from 'next'

export declare interface FeedProps {
  readonly id: number
  gender: string
  first_name: string
  last_name: string
  salary: number
  bonus: number
  total: number
}[]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(feeds)
}
