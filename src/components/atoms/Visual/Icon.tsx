import React from 'react'
import { Visual } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

const Icon = ({ ...props }:Atom) => {
  return (
    <Visual.IconStyled {...props}></Visual.IconStyled>
  )
}

export default Icon