import React, { useState } from 'react'
import { Action, Container, Visual } from '../atoms'
import { dark, white } from '../../assets/color'
import MobileMenu from './MobileMenu'
import { usePageColor } from '../../hooks/usePageColor'

const Header = () => {

  const [displayMenu, setMenuDisplay] = useState(false)
  const color = usePageColor()

  const changeDisplayMenu = () => {
    setMenuDisplay(!displayMenu)
  }

  return (
    <Container.Column>
      <Container.Row direction="row" alignItems="center" justifyContent="space-between" width="94.4vw" position="absolute" top="20px" mTop="40px" left="50%" transform="translate(-50%, 0)" padding="10px 30px" mPadding="0 20px" borderRadius="12.5rem" background="rgba(255, 255, 255, 0.80)" mBackground="none" backdropFilter="blur(7.5px)" mBackdropFilter="none">
        <Container.Row mDisplay="none" width="20.5vw" alignItems="center" gap="15px">
          <Action.Link to={"/"} gap="15px">
            <Visual.Svg label='logo' fill={color.dark} />
            <Container.Row justifyContent="center" alignItems="center" gap="10px">
              <Visual.Svg label='title' />
              <Container.Row justifyContent="center" alignItems="center">
                <Visual.Svg label='star' />
                <Visual.Svg label='star' />
                <Visual.Svg label='star' />
                <Visual.Svg label='star' />
              </Container.Row>
            </Container.Row>
          </Action.Link>
        </Container.Row>
        <Container.Row mDisplay="none" justifyContent="center" alignItems="center" gap="2.7vw" alignSelf="stretch">
          <Action.NavLink to={"/gite"} fontSize="1.25rem" end>Le gite</Action.NavLink>
          <Action.NavLink to={"/reservation"} fontSize="1.25rem">Réserver</Action.NavLink>
          <Action.NavLink to={"/visite"} fontSize="1.25rem">A visiter</Action.NavLink>
          <Action.NavLink to={"/acces"} fontSize="1.25rem">Accès</Action.NavLink>
          <Action.NavLink to={"/commentaire"} fontSize="1.25rem">Livre d'or</Action.NavLink>
        </Container.Row>
        <Container.Row mDisplay="none" width="20.5vw" justifyContent="flex-end" gap="20px">
          <Action.Link to="https://www.facebook.com/legitedauzon.fr" target="_blank" rel="noopener noreferrer">
            <Visual.Svg fill={dark} label='fb' />
          </Action.Link>
          <Action.Link to="https://legitedauzon.fr/" target="_blank" rel="noopener noreferrer">
            <Visual.Svg fill={dark} label='tk' />
          </Action.Link>
          <Action.Link to="https://www.instagram.com/legitedauzon?igsh=MnBoaDQ4Ym1ocW1r&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <Visual.Svg fill={dark} label='ig' />
          </Action.Link>
        </Container.Row>
        <Container.Column display="none" mDisplay="flex">
          <Visual.Svg label="mobile_logo" fill={color.dark} />
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