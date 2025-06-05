import React from 'react'
import { Action } from '../../nanites'

type Props = {
  children: string
}

const Link = ({ children }: Props) => {
  return (
    <Action.LinkStyled>
      {children}
    </Action.LinkStyled>
  )
}

export default Link