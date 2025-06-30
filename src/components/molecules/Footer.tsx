import React, { useState } from 'react'
import { Container, Form, Text, Visual } from '../atoms'
import { usePageColor } from '../../hooks/usePageColor'
import { sendMail } from '../../services/Mails'
import { dark } from '../../assets/color'

type FormData = {
  name: string
  email: string
  message: string
}

const Footer = () => {
  const color = usePageColor()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [resutlForm, setResutlForm] = useState<boolean | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleClick = async () => {
    const result = await sendMail(formData)

    if (result === "Erreur")
      setResutlForm(false)

    if (result.status === 200)
      setResutlForm(true)
  }

  return (
    <Container.Column>
      <Container.Column padding="3.125rem 8.3vw" alignSelf="stretch" background={color.normal}>
        <Container.Row gap="6.9vw" alignSelf="stretch">
          <Container.Column justifyContent="center" gap="2.5rem" alignSelf="stretch" flex="1">
            <Text.Title textAlign="start">Contactez-nous !</Text.Title>
            <Text.Paragraph>Pour toutes les demandes, n’hésitez pas à nous contacter par mail</Text.Paragraph>
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
                <Text.Label>Prénom et nom*</Text.Label>
                <Form.Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Container.Column>
              <Container.Column gap="7px" alignSelf="stretch">
                <Text.Label>Email*</Text.Label>
                <Form.Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Container.Column>
              <Container.Column gap="7px" alignSelf="stretch">
                <Text.Label>Message</Text.Label>
                <Form.TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Container.Column>
              <Text.Paragraph display={resutlForm !== null ? "flex" : "none"} color={resutlForm ? dark : "red"}>{resutlForm ? "Un mail nous a été envoyé, nous vous répondront au plus vite" : "Il y a une erreur sur l'envoi du mail"}</Text.Paragraph>
            </Container.Column>
            <Form.Button onClick={handleClick}>
              Envoyer
            </Form.Button>
          </Container.Column>
        </Container.Row>
      </Container.Column>

      <Container.Row
        height="5rem"
        mHeight="auto"
        padding="10px 8.3vw"
        mPadding="40px 30px"
        justifyContent="space-between"
        mJustifyContent="center"
        alignItems="center"
        alignSelf="stretch"
        mGap="30px"
      >
        <Text.Paragraph>Mentions légales</Text.Paragraph>
        <Text.Paragraph textAlign="center">
          Copyright © 2025 Le Gite d’Auzon. Tous droits réservés.
        </Text.Paragraph>
      </Container.Row>
    </Container.Column>
  )
}

export default Footer
