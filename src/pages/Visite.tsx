import React from 'react'
import { Action, Container } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import { green, lightGreen } from '../assets/color'

const Visite = () => {
  return (
    <Container.Column>
      <HeroBanner height="40vh" paddingTop="60px" text="Quelques endroits à visiter !" />
      <Container.Row padding="3.75rem 6.25rem 0 6.25rem" justifyContent="center" alignItems="flex-start" gap="15px" alignSelf="stretch">
        <Action.Button padding="7px 15px" borderRadius="5px" background={lightGreen}>
          Événements
        </Action.Button>
        <Action.Button padding="7px 15px" borderRadius="5px" background={lightGreen}>
          Lieux à visiter
        </Action.Button>
        <Action.Button padding="7px 15px" borderRadius="5px" background={lightGreen}>
          Randonnées
        </Action.Button>
        <Action.Button padding="7px 15px" borderRadius="5px" background={green}>
          Tout afficher
        </Action.Button>
      </Container.Row>
      <Container.Grid></Container.Grid>
    </Container.Column>
  )
}

export default Visite