import {
  Typography,
  Grid,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import FeedCard from '../../components/FeedCard'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Feed() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/feeds/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <Grid
      container
      justify='center'
      direction='column'
      alignItems='center'
    >
      <Typography variant='h1'>
        About {data.first_name}
      </Typography>
      <FeedCard feed={data} noButton />
    </Grid>
  )
}
