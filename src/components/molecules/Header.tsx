import React, { useState } from 'react'
import { Action, Container, Visual } from '../atoms'
import { dark, darkGreen, white } from '../../assets/color'
import MobileMenu from './MobileMenu'

const Header = () => {

  const [displayMenu, setMenuDisplay] = useState(false)

  const changeDisplayMenu = () => {
    setMenuDisplay(!displayMenu)
  }

  return (
    <Container.Column>
      <Container.Row direction="row" alignItems="center" justifyContent="space-between" width="94.4vw" position="absolute" top="20px" mTop="40px" left="50%" transform="translate(-50%, 0)" padding="10px 30px" mPadding="0 20px" borderRadius="12.5rem" background="rgba(255, 255, 255, 0.80)" mBackground="none" backdropFilter="blur(7.5px)" mBackdropFilter="none">
        <Container.Row mDisplay="none" width="20.5vw" alignItems="center" gap="15px">
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
        <Container.Row mDisplay="none" justifyContent="center" alignItems="center" gap="2.7vw" alignSelf="stretch">
          <Action.Link fontSize="1.25rem">Le gite</Action.Link>
          <Action.Link fontSize="1.25rem">Réserver</Action.Link>
          <Action.Link fontSize="1.25rem">A visiter</Action.Link>
          <Action.Link fontSize="1.25rem">Accès</Action.Link>
          <Action.Link fontSize="1.25rem">Livre d'or</Action.Link>
        </Container.Row>
        <Container.Row mDisplay="none" width="20.5vw" justifyContent="flex-end" gap="20px">
          <Action.Link href="https://www.facebook.com/legitedauzon.fr" target="_blank" rel="noopener noreferrer">
            <Visual.Svg fill={dark} label='fb' />
          </Action.Link>
          <Action.Link href="https://legitedauzon.fr/" target="_blank" rel="noopener noreferrer">
            <Visual.Svg fill={dark} label='tk' />
          </Action.Link>
          <Action.Link href="https://legitedauzon.fr/" target="_blank" rel="noopener noreferrer">
            <Visual.Svg fill={dark} label='ig' />
          </Action.Link>
        </Container.Row>
        <Container.Column display="none" mDisplay="flex">
          <Visual.Svg label="mobile_logo" fill={darkGreen} />
        </Container.Column>
        <Action.Button onClick={() => changeDisplayMenu()} display="none" mDisplay="flex" width="4rem" height="4rem" padding="15px" borderRadius="2.8rem" background={white} flexShrink="0">
          <Visual.Svg width={64} label="burger" />
        </Action.Button>
      </Container.Row>
      {
        displayMenu &&
        <MobileMenu changeDisplayMenu={changeDisplayMenu} />
      }
    </Container.Column>
  )
}

export default Header