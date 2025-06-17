import React from 'react'
import { Action, Container, Visual } from '../atoms'
import { darkGreen } from '../../assets/color'

const Header = () => {
  return (
    <Container.Row alignItems="center" justifyContent="space-between" width="94.4vw" position="absolute" top="20px" left="50%" transform="translate(-50%, 0)" padding="10px 30px" borderRadius="12.5rem" background="rgba(255, 255, 255, 0.80)" backdropFilter="blur(7.5px)">
      <Container.Row width="20.5vw" alignItems="center" gap="15px">
        <Visual.Svg label='logo' fill={darkGreen} />
        <Container.Row justifyContent="center" alignItems="center" gap="10px">
          <Visual.Svg label='title' />
          <Container.Row justifyContent="center" alignItems="center">
            <Visual.Svg label='star' />
            <Visual.Svg label='star' />
            <Visual.Svg label='star' />
            <Visual.Svg label='star' />
          </Container.Row>
        </Container.Row>
      </Container.Row>
      <Container.Row justifyContent="center" alignItems="center" gap="2.7vw" alignSelf="stretch">
        <Action.Link fontSize="1.25rem">Le gite</Action.Link>
        <Action.Link fontSize="1.25rem">Réserver</Action.Link>
        <Action.Link fontSize="1.25rem">A visiter</Action.Link>
        <Action.Link fontSize="1.25rem">Accès</Action.Link>
        <Action.Link fontSize="1.25rem">Livre d'or</Action.Link>
      </Container.Row>
      <Container.Row width="20.5vw" justifyContent="flex-end" gap="20px">
        <Visual.Svg label='fb' />
        <Visual.Svg label='tk' />
        <Visual.Svg label='ig' />
      </Container.Row>
    </Container.Row>
  )
}

export default Header