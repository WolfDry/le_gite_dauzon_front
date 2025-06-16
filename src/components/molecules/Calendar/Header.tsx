import React from 'react'
import { HeaderProps } from 'react-big-calendar'
import { Container, Text } from '../../atoms'

const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <Container.Column gap="255px">
      <Text.Paragraph>
        {label}
      </Text.Paragraph>
    </Container.Column>
  )
}

export default Header