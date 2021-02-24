import {
  Card,
  Typography,
  Button,
  Grid,
} from '@material-ui/core'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

export default function FeedCard({
  feed,
  noButton,
}) {
  const classes = useStyles()

  return (
    <Grid
      container
      justify='center'
      component={Card}
      raised
      className={classes.paper}
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
