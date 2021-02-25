import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
