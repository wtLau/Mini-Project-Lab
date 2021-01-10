import React, { useContext } from 'react'
import {
  useTheme,
  useThemeUpdate,
} from './ThemeContext'

const FunctionContextComponent = () => {
  //USING CUSTOM HOOK
  const darkTheme = useTheme()
  const changeTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
  }
  return (
    <div style={themeStyles}>
      <p>Function Theme</p>
      <button onClick={changeTheme}>
        Change Themes
      </button>
      <p>DarkTheme ==== {darkTheme.toString()}</p>
    </div>
  )
}

export default FunctionContextComponent
