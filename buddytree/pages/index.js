import Head from 'next/head'
import useSWR from 'swr'
import FeedCard from '../components/FeedCard'
import {
  Grid,
  Typography,
} from '@material-ui/core'

const fetcher = (url) =>
  fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR(
    '/api/feeds',
    fetcher
  )

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Grid container spacing={3}>
      <Grid
        item
        container
        xs={12}
        justify='center'
      >
        <Typography variant='h1'>
          List of Feeds
        </Typography>
      </Grid>

      <Grid container justify='center'>
        {data.map((feed, index) => (
          <FeedCard key={index} feed={feed} />
        ))}
      </Grid>
    </Grid>
  )
}
