import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { blue, darkGreen } from '../assets/color'

const getColorFromPath = (path: string) => {
  switch (path) {
    case '/':
      return darkGreen
    case '/reservation':
      return blue
    default:
      return darkGreen
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
