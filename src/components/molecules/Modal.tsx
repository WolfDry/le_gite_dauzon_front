import React from 'react'
import { Action, Container, Text, Visual } from '../atoms'

type Props = {
  comment: string
  closeModal: () => void
}

const Modal = ({ comment, closeModal }: Props) => {
  return (
    <Container.Column background="rgba(0, 0, 0, 0.5)" width="100vw" height="100vh" justifyContent="center" alignItems="center" position="fixed" top="0" left="0">
      <Container.Column background="white" padding="2rem" borderRadius="1rem" width="50vw" maxHeight="80vh" overflowY="auto">
        <Container.Row justifyContent="flex-end" width="100%">
          <Action.Button background="transparent" cursor="pointer" onClick={closeModal}>
            <Visual.Svg width={24} height={24} label="close" fill="black" />
          </Action.Button>
        </Container.Row>
        <Container.Column gap="1rem">
          <Text.Paragraph>{comment}</Text.Paragraph>
        </Container.Column>
      </Container.Column>
    </Container.Column>
  )
}

export default Modal