import React from 'react'
import { Container } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'

const Visite = () => {
  return (
    <Container.Column>
      <HeroBanner height="40vh" paddingTop="60px" text="Quelques endroits à visiter !" />
    </Container.Column>
  )
}

export default Visite