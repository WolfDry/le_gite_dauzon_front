import React from 'react'
import { Action } from '../../nanites'

type Props = {
  children: any
}

const Button = ({ children }: Props) => {
  return (
    <Action.ButtonStyled>
      {children}
    </Action.ButtonStyled>
  )
}

export default Button