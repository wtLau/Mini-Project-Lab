import {
  Card,
  Typography,
  Button,
  Grid,
} from '@material-ui/core'
import Link from 'next/link'
import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: 500,
  },
}))

export interface FeedProps {
  feed: {
    readonly id: number
    gender: string
    first_name: string
    last_name: string
    salary: number
    bonus: number
    total: number
  }
  noButton?: boolean
}
export default function FeedCard({
  feed,
  noButton,
}: FeedProps) {
  const classes = useStyles()

  return (
    <Grid
      container
      justify='center'
      component={Card}
      raised
      className={classes.wrapper}
    >
      <Grid item xs={10}>
        <Typography variant='h3'>
          {feed.first_name} {feed.last_name}
        </Typography>
        <Typography>
          Gender: {feed.gender}
        </Typography>
        <Typography>
          Salary: {feed.salary}
        </Typography>
        <Typography>
          Bonus: {feed.bonus}
        </Typography>
        <Typography>
          Total: {feed.total}
        </Typography>
      </Grid>
      {noButton ? null : (
        <Grid item xs={10}>
          <Link
            href='/feed/[id]'
            as={`/feed/${feed.id}`}
          >
            <Button
              variant='contained'
              color='primary'
            >
              Learn More
            </Button>
          </Link>
        </Grid>
      )}
    </Grid>
  )
}
