import React from 'react'
import { Visual } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

const Image = ({ ...props }:Atom) => {
  return <Visual.ImageStyled {...props}></Visual.ImageStyled>

}

export default Image