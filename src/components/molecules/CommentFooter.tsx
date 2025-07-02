import React, { useState } from "react"
import { Container, Form, Text, Visual } from "../atoms"
import { usePageColor } from "../../hooks/usePageColor"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../types/Redux.type"
import { createComment } from "../../stores/thunks/commentaireThunks"
import { Comment } from "../../types/Commentaire.type"

const CommentFooter = () => {
  const color = usePageColor()

  const dispatch = useDispatch<AppDispatch>()

  const [inputs, setInputs] = useState<Comment>({
    name: "",
    commentaire: "",
    note: 0,
    verif: false,
  })

  const [hoverRating, setHoverRating] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingClick = (value: number) => {
    setInputs((prev) => ({ ...prev, note: value }))
  }

  const handleSend = () => {
    dispatch(createComment(inputs))
    setInputs({
      name: "",
      commentaire: "",
      note: 0,
      verif: false,
    })
  }

  return (
    <Container.Column>
      <Container.Column padding="3.125rem 8.3vw" alignSelf="stretch" background={color.normal}>
        <Container.Row gap="6.9vw" alignSelf="stretch">
          <Container.Column justifyContent="center" gap="2.5rem" alignSelf="stretch" flex="1">
            <Text.Title fontSize="2.25rem" textAlign="start">
              {`Vous avez passé un agréable séjour ?
              Laissez nous un petit commentaire 😁`}
            </Text.Title>
            <Container.Column gap="7px">
              <Container.Row direction="row" alignItems="center" gap="10px">
                <Visual.Svg label="mail" />
                <Text.Paragraph>legitedauzon@free.fr</Text.Paragraph>
              </Container.Row>
              <Container.Row direction="row" alignItems="center" gap="10px">
                <Visual.Svg label="maps" />
                <Text.Paragraph>20 impasse du petit Nice, 07260 Joyeuse</Text.Paragraph>
              </Container.Row>
              <Container.Row direction="row" alignItems="center" gap="10px">
                <Visual.Svg label="whatsapp" />
                <Text.Paragraph>06.10.33.99.06</Text.Paragraph>
              </Container.Row>
            </Container.Column>
          </Container.Column>

          <Container.Column justifyContent="center" alignItems="flex-start" gap="40px" flex="1">
            <Container.Column gap="20px" alignSelf="stretch" alignItems="flex-start">
              <Container.Column gap="7px" alignSelf="stretch">
                <Text.Label>Prénom et nom*</Text.Label>
                <Form.Input
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                />
              </Container.Column>
              <Container.Column gap="7px" alignSelf="stretch">
                <Text.Label>Message</Text.Label>
                <Form.TextArea
                  name="commentaire"
                  value={inputs.commentaire}
                  onChange={handleChange}
                />
              </Container.Column>
              <Container.Row direction="row" justifyContent="center" alignItems="center" gap="15px">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Container.Column
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRatingClick(star)}
                    style={{ cursor: "pointer" }}
                  >
                    <Visual.Svg
                      label={(hoverRating || inputs.note) >= star ? "star" : "empty_star"}
                      width={26}
                      height={26}
                    />
                  </Container.Column>
                ))}
              </Container.Row>
            </Container.Column>
            <Form.Button onClick={() => handleSend()}>Envoyer</Form.Button>
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

export default CommentFooter
