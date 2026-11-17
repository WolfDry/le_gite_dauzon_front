import { NavLink as RouterNavLink, NavLinkProps } from 'react-router'
import { Action } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

type Props = NavLinkProps & Atom

const NavLink = ({ children, ...props }: Props) => {
  return (
    <Action.NavLinkStyled as={RouterNavLink} {...props}>
      {children}
    </Action.NavLinkStyled>
  )
}

export default NavLink
