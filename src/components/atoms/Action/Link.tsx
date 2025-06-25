import React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { Action } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

type Props = LinkProps & Atom

const Link = ({ children, ...props }: Props) => {
  return (
    <Action.LinkStyled as={RouterLink} {...props}>
      {children}
    </Action.LinkStyled>
  )
}

export default Link
