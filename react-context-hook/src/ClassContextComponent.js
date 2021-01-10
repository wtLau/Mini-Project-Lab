import React, { Component } from 'react'
import { ThemeProvider } from './ThemeContext'

export default class ClassContextComponent extends Component {
  themStyles(dark) {
    return {
      backgroundColor: dark ? '#333' : '#ccc',
      color: dark ? '#ccc' : '#333',
      padding: '2rem',
      margin: '2rem',
    }
  }

  render() {
    return (
      <ThemeProvider>
        {(darkTheme) => {
          return (
            <div
              style={this.themStyles(darkTheme)}
            >
              Class Theme
            </div>
          )
        }}
      </ThemeProvider>
    )
  }
}
