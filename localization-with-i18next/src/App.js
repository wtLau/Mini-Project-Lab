import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  useTranslation,
  withTranslation,
  Trans,
} from 'react-i18next'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Header from './Header'

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row',
  },
  container: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  topgrid: {
    marginTop: '10px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class App extends Component {
  state = {
    value: 'en',
  }

  handleChange = (event) => {
    console.log(
      'selected val is ',
      event.target.value
    )
    let newlang = event.target.value
    this.setState((prevState) => ({
      value: newlang,
    }))
    console.log('state value is', newlang)
    this.props.i18n.changeLanguage(newlang)
  }

  render() {
    const { t, i18n } = this.props
    const { classes } = this.props

    return (
      <div className='App'>
        <Header />

        <div className={classes.container}>
          <Grid container spacing={24}>
            <Grid
              item
              xs={12}
              className={classes.topgrid}
            >
              <Paper className={classes.paper}>
                <div className={classes.root}>
                  <FormControl
                    component='fieldset'
                    className={
                      classes.formControl
                    }
                  >
                    <FormLabel component='legend'>
                      Select Language
                    </FormLabel>
                    <RadioGroup
                      aria-label='Gender'
                      name='gender1'
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value='en'
                        control={<Radio />}
                        label='English'
                      />
                      <FormControlLabel
                        value='jap'
                        control={<Radio />}
                        label='Japanese'
                      />

                      <FormControlLabel
                        value='hin'
                        control={<Radio />}
                        label='Hindi'
                      />
                      <FormControlLabel
                        value='fre'
                        control={<Radio />}
                        label='French'
                      />
                      <FormControlLabel
                        value='ger'
                        control={<Radio />}
                        label='German'
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography
                  variant='h3'
                  gutterBottom
                >
                  <Trans>
                    {' '}
                    {t('Introduction')}{' '}
                  </Trans>

                  <Typography
                    variant='subtitle2'
                    gutterBottom
                  >
                    i18next {t('Engsub')}
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Typography
                  variant='h6'
                  gutterBottom
                >
                  {t('Advantages')}
                </Typography>

                <List dense={false}>
                  <ListItem>
                    <ListItemText>
                      {t(
                        'Plugins to detect the user language'
                      )}
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      {t(
                        'Plugins to load translations'
                      )}
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      {t(
                        'Optionally cache the translations'
                      )}
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      {t(
                        'Flexibility to use other packages'
                      )}
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      {t(
                        'Plugins to detect the user language'
                      )}
                    </ListItemText>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Typography
                  variant='h6'
                  gutterBottom
                >
                  No Change Section
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom
                >
                  It is a long established fact
                  that a reader will be distracted
                  by the readable content of a
                  page when looking at its layout.
                  The point of using Lorem Ipsum
                  is that it has a more-or-less
                  normal distribution of letters,
                  as opposed to using 'Content
                  here, content here', making it
                  look like readable English. Many
                  desktop publishing packages and
                  web page editors now use Lorem
                  Ipsum as their default model
                  text, and a search for 'lorem
                  ipsum' will uncover many web
                  sites still in their infancy.
                  Various versions have evolved
                  over the years, sometimes by
                  accident, sometimes on purpose
                  (injected humour and the like
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

// extended main view with translate hoc

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(styles)(
  withTranslation('translations')(App)
)
