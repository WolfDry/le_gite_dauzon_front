import React from 'react'
import { Action, Container, Text, Visual } from '../atoms'
import { darkGreen } from '../../assets/color'

const Socials = () => {
  return (
    <Container.Column alignSelf="stretch" padding="1.875rem 0" alignItems="center" gap="1.875rem" borderRadius="1.25rem" border={`6px solid ${darkGreen}`}>
      <Text.Paragraph>
        Suivez-nous sur les réseaux !
      </Text.Paragraph>
      <Container.Row direction="row" gap="2.5rem">
        <Action.Link href="https://www.facebook.com/legitedauzon.fr" target="_blank" rel="noopener noreferrer">
          <Visual.Image width="3.125rem" height="3.125rem" src="/assets/images/socials/facebook.png" />
        </Action.Link>
        <Action.Link href="https://legitedauzon.fr/" target="_blank" rel="noopener noreferrer">
          <Visual.Image width="3.125rem" height="3.125rem" src="/assets/images/socials/tiktok.png" />
        </Action.Link>
        <Action.Link href="https://legitedauzon.fr/" target="_blank" rel="noopener noreferrer">
          <Visual.Image width="3.125rem" height="3.125rem" src="/assets/images/socials/instagram.png" />
        </Action.Link>
      </Container.Row>
    </Container.Column>
  )
}

export default Socials