import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { blue, darkBlue, darkGreen, green, yellow } from '../assets/color'

const getColorFromPath = (path: string) => {
  switch (path) {
    case '/':
      return {
        normal: green,
        dark: darkGreen
      }
    case '/reservation':
      return {
        normal: blue,
        dark: darkBlue
      }
    case '/gite':
      return {
        normal: yellow,
        dark: yellow
      }
    case '/visite':
      return {
        normal: green,
        dark: darkGreen
      }
    case '/acces':
      return {
        normal: blue,
        dark: darkBlue
      }
    default:
      return {
        normal: green,
        dark: darkGreen
      }
  }
}

export const usePageColor = () => {
  const location = useLocation()
  const [color, setColor] = useState(getColorFromPath(location.pathname))

  useEffect(() => {
    setColor(getColorFromPath(location.pathname))
  }, [location.pathname])
  return color
}
