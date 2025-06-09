import React from 'react'
import { Action } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

const Button = ({ children, ...props }: Atom) => {
  return (
    <Action.ButtonStyled {...props}>
      {children}
    </Action.ButtonStyled>
  )
}

export default Button