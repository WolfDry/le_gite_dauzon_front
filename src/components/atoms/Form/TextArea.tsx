import React from 'react'
import { Form } from '../../nanites'

const TextArea = (props:Record<any, unknown>) => {
  return (
    <Form.TextAreaStyled {...props} />
  )
}

export default TextArea