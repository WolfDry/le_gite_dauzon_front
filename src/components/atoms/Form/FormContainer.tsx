import React from 'react'
import { Form } from '../../nanites'
import { Atom } from '../../../types/Atom.type'

const FormContainer = ({ children, ...props }:Atom) => {
  return (
    <Form.FormContainerStyled {...props}>{children}</Form.FormContainerStyled>
  )
}

export default FormContainer