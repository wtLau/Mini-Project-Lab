import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react'
import FeedCard from '../components/FeedCard'
import {
  Grid,
  Typography,
} from '@material-ui/core'
import useFeed from '../useFeed'

export default function Index() {
  const [feedNumber, setFeedNumber] = useState(20)
  const loader = useRef(null)
  const {
    feedData,
    isLoading,
    isError,
  } = useFeed()

  // Ref to loader
  const loadMore = useCallback(
    (node) => {
      if (node[0].isIntersecting && feedData) {
        setFeedNumber((preNum) => preNum + 10)
      }
    },
    [feedNumber, feedData]
  )

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    }
    // Create observer
    const observer = new IntersectionObserver(
      loadMore,
      options
    )
    // observer the loader
    if (loader && loader.current) {
      observer.observe(loader.current)
    }
    // Remove observer
    return () => observer.disconnect()
  }, [loader, loadMore])

  return (
    <Grid container spacing={3}>
      <div>
        {isError && 'Something went wrong :('}
      </div>
      <div>{isLoading && 'Loading...'}</div>
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
        {feedData &&
          feedData
            .slice(0, feedNumber)
            .map((feed, index) => (
              <FeedCard key={index} feed={feed} />
            ))}
      </Grid>
      {isLoading ||
      feedData.length < feedNumber ? null : (
        <Grid
          container
          justify='center'
          component={Typography}
          ref={loader}
        >
          Loading More...
        </Grid>
      )}
    </Grid>
  )
}
