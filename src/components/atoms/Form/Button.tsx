import React from 'react'
import { Form } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

const Button = ({ children, ...props }:Atom) => {
  return (
    <Form.ButtonStyled {...props}>{children}</Form.ButtonStyled>
  )
}

export default Button