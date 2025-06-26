import React from 'react'
import { Container } from '../../atoms'

type Props = {
  children: any
} & Record<any, unknown>

const Cell = ({ children, ...props }: Props) => {
  return (
    <Container.Column padding="1.25rem" justifyContent="center" alignItems="center" alignSelf="stretch" borderRadius="10px" {...props}>
      {children}
    </Container.Column>
  )
}

export default Cell