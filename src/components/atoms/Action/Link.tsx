import React from 'react'
import { Action } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

const Link = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & Atom) => {
  return (
    <Action.LinkStyled {...props}>
      {children}
    </Action.LinkStyled>
  )
}

export default Link