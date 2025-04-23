import React from 'react'
import { Form } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

const Input = ({ ...props }:Atom) => {
  return (
    <Form.InputStyled {...props} />
  )
}

export default Input