// ** React Imports
import { useEffect, useState, createContext } from 'react'

// ** Create Context
const ThemeColors = createContext()

const ThemeContext = ({ children }) => {
  // ** State
  const [colors, setColors] = useState({})

  //** ComponentDidMount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      //** Get variable value
      const getHex = color => window.getComputedStyle(document.body).getPropertyValue(color).trim()

      //** Colors obj
      const obj = {
        primary: "#795548",
        secondary: "#bdbdbd",
        success: "#4caf50",
        danger: "#f44336",
        warning: "#ffc107",
        info: "#2196f3",
        dark: "#607d8b"
      }

      setColors({ ...obj })
    }
  }, [])

  return <ThemeColors.Provider value={{ colors }}>{children}</ThemeColors.Provider>
}

export { ThemeColors, ThemeContext }
