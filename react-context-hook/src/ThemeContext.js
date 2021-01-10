import React, {
  useContext,
  useState,
} from 'react'

// INITILIZE CONTEXT HOOK
const ThemeContext = React.createContext()
const ThemeUpateContext = React.createContext()

// CUSTOM HOOKS
export const useTheme = () => {
  return useContext(ThemeContext)
}
export const useThemeUpdate = () => {
  return useContext(ThemeUpateContext)
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarktTheme] = useState(
    false
  )

  const changeTheme = () => {
    setDarktTheme(
      (prevDarkTheme) => !prevDarkTheme
    )
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpateContext.Provider
        value={changeTheme}
      >
        {children}
      </ThemeUpateContext.Provider>
    </ThemeContext.Provider>
  )
}
