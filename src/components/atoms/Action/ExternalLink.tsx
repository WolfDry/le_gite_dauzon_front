import React from 'react'
import { Action } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

const ExternalLink = ({ children, ...props }: Atom) => {
  return (
    <Action.ExternalLinkStyled {...props}>
      {children}
    </Action.ExternalLinkStyled>
  )
}

export default ExternalLink
