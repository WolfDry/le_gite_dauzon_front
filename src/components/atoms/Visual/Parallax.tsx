import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

type Props = {
  translation: [number, number] | [string, string]
  children: any
}

const ParallaxAtoms = ({ translation, children }: Props) => {
  return (
    <ParallaxProvider>
      <Parallax translateY={translation}>
        <div style={{ width: "100%", height: "100%" }}>
          {children}
        </div>
      </Parallax>
    </ParallaxProvider>
  )
}

export default ParallaxAtoms