import React from 'react'
import { Container } from '../../components/atoms'

import HeroBanner from '../../components/molecules/HeroBanner/HeroBanner'
import { cream } from '../../assets/color'

const Accueil = () => {
  return (
    <Container.Column width="100vw" background={cream}>
      <HeroBanner />
    </Container.Column>
  )
}

export default Accueil