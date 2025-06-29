import React from 'react'
import { Action, Container, Visual } from '../atoms'
import { white } from '../../assets/color'

type Props = {
  changeDisplayMenu: () => void
}

const MobileMenu = ({ changeDisplayMenu }: Props) => {
  return (
    <Container.Column width="100vw" height="100vh" padding="50px 30px" alignItems="flex-start" gap="30px" position="absolute" background="rgba(46, 107, 69, 0.80)" mBackdropFilter="blur(7.5px)" zIndex="99">
      <Container.Row onClick={() => changeDisplayMenu()} direction="row" justifyContent="flex-end" alignItems="center" alignSelf="stretch" cursor="pointer">
        <Visual.Svg label="close" />
      </Container.Row>
      <Container.Column alignItems="flex-start" gap="20px" flex="1 0 0" alignSelf="stretch">
        <Action.Link to={"/gite"} color={white}>
          Le gîte
        </Action.Link>
        <Action.Link to={"/reservation"} color={white}>
          Réserver
        </Action.Link>
        <Action.Link to={"/visite"} color={white}>
          À visiter
        </Action.Link>
        <Action.Link to={"/acces"} color={white}>
          Accès
        </Action.Link>
        <Action.Link to={"/"} color={white}>
          Livre d'or
        </Action.Link>
      </Container.Column>
      <Container.Row direction="row" alignItems="flex-start" gap="20px">
        <Visual.Svg label="fb" fill={white} />
        <Visual.Svg label="tk" fill={white} />
        <Visual.Svg label="ig" fill={white} />
      </Container.Row>
    </Container.Column >
  )
}

export default MobileMenu