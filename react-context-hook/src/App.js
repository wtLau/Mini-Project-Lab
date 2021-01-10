import React, { useState } from 'react'
import './App.css'

import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'
import { ThemeProvider } from './ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
      {/* <ClassContextComponent /> */}
    </ThemeProvider>
  )
}

export default App
