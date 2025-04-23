import React from 'react'
import { Visual } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

const Background = ({ ...props }:Atom) => {
  return (
    <Visual.BackgroundStyled {...props}></Visual.BackgroundStyled>
  )
}

export default Background