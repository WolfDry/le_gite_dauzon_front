import React, { useEffect, useState } from 'react'
import { Container, Form, Text, Visual } from '../atoms'
import { blue, darkGreen, green } from '../../assets/color'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const [color, setColor] = useState(darkGreen)

  useEffect(() => {
    const path = location.pathname

    switch (path) {
      case "/":
        setColor(darkGreen)
        break
      case "/reservation":
        setColor(blue)
        break
      default:
        setColor(darkGreen)
    }
  }, [location.pathname])
  return (
    <Container.Column>
      <Container.Column padding="3.125rem 8.3vw" alignSelf="stretch" background={color}>
        <Container.Row gap="6.9vw" alignSelf="stretch">
          <Container.Column justifyContent="center" gap="2.5rem" alignSelf="stretch" flex="1">
            <Text.Title textAlign="start">
              Contactez-nous !
            </Text.Title>
            <Text.Paragraph>
              Pour toutes les demandes, n’hésitez pas à nous contacter par mail
            </Text.Paragraph>
            <Container.Column gap="7px">
              <Container.Row direction="row" alignItems="center" gap="10px">
                <Visual.Svg label="mail" />
                <Text.Paragraph>legitedauzon@free.fr</Text.Paragraph>
              </Container.Row>
              <Container.Row direction="row" alignItems="center" gap="10px">
                <Visual.Svg label="maps" />
                <Text.Paragraph>20 impasse du petit nice, 07260 Joyeuse</Text.Paragraph>
              </Container.Row>
              <Container.Row direction="row" alignItems="center" gap="10px">
                <Visual.Svg label="whatsapp" />
                <Text.Paragraph>06.10.33.99.06</Text.Paragraph>
              </Container.Row>
            </Container.Column>
          </Container.Column>
          <Container.Column justifyContent="center" alignItems="flex-start" gap="40px" flex="1">
            <Container.Column gap="20px" alignSelf="stretch">
              <Container.Column gap="7px" alignSelf="stretch">
                <Text.Label>
                  Prénom et nom*
                </Text.Label>
                <Form.Input type="text" />
              </Container.Column>
              <Container.Column gap="7px" alignSelf="stretch">
                <Text.Label>
                  Email*
                </Text.Label>
                <Form.Input type="email" />
              </Container.Column>
              <Container.Column gap="7px" alignSelf="stretch">
                <Text.Label>
                  Message
                </Text.Label>
                <Form.TextArea />
              </Container.Column>
            </Container.Column>
            <Form.Button>
              Envoyer
            </Form.Button>
          </Container.Column>
        </Container.Row>
      </Container.Column>
      <Container.Row height="5rem" mHeight="auto" padding="10px 8.3vw" mPadding="40px 30px" justifyContent="space-between" mJustifyContent="center" alignItems="center" alignSelf="stretch" mGap="30px">
        <Text.Paragraph>
          Mentions légales
        </Text.Paragraph>
        <Text.Paragraph textAlign="center">
          Copyright © 2025 Le Gite d’Auzon. Tous droits réservés.
        </Text.Paragraph>
      </Container.Row>
    </Container.Column>
  )
}

export default Footer