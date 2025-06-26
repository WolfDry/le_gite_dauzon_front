import React from 'react'
import { Container } from '../../atoms'

type Props = {
  children: any
} & Record<any, unknown>

const Ligne = ({ children, ...props }: Props) => {
  return (
    <Container.Row alignItems="flex-start" gap="10px" alignSelf="stretch" {...props}>
      {children}
    </Container.Row>
  )
}

export default Ligne