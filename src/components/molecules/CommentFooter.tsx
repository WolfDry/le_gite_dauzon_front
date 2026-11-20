import React, { useState } from "react"
import { Container, Form, Text, Visual } from "../atoms"
import { usePageColor } from "../../hooks/usePageColor"
import { dark } from "../../assets/color"
import { useCreateCommentaire } from "../../services/mutations"
import { submitErrorMessage } from "../../services/errors"
import { useAntiBot } from "../../lib/antiBot"
import LegalBar from "./LegalBar"
import PrivacyNotice from "./PrivacyNotice"

type Inputs = {
  name: string
  commentaire: string
  note: number
}

type FieldErrors = Partial<Record<keyof Inputs, string>>

const emptyInputs: Inputs = { name: "", commentaire: "", note: 0 }

/** Mêmes règles que l'API, pour signaler l'erreur à côté du champ avant l'envoi. */
const validate = (inputs: Inputs): FieldErrors => {
  const errors: FieldErrors = {}
  if (!inputs.name.trim()) errors.name = "Indiquez votre prénom et votre nom."
  else if (inputs.name.trim().length > 100) errors.name = "Le nom est trop long (100 caractères maximum)."
  if (!inputs.commentaire.trim()) errors.commentaire = "Écrivez quelques mots sur votre séjour."
  else if (inputs.commentaire.length > 3000) errors.commentaire = "Le message est trop long (3000 caractères maximum)."
  if (inputs.note < 1 || inputs.note > 5) errors.note = "Choisissez une note de 1 à 5 étoiles."
  return errors
}

const FieldError = ({ message }: { message?: string }) =>
  message ? <Text.Paragraph color="red" fontSize="0.875rem" role="alert">{message}</Text.Paragraph> : null

const CommentFooter = () => {
  const color = usePageColor()

  const [inputs, setInputs] = useState<Inputs>(emptyInputs)
  const [errors, setErrors] = useState<FieldErrors>({})
  const send = useCreateCommentaire()
  const antiBot = useAntiBot()
  const busy = send.isPending || antiBot.isVerifying

  const [hoverRating, setHoverRating] = useState(0)

  const update = (field: keyof Inputs, value: string | number) => {
    setInputs((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (!send.isPending) send.reset()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    update(name as keyof Inputs, value)
  }

  const handleRatingClick = (value: number) => {
    update("note", value)
  }

  const handleSend = async () => {
    if (busy) return

    const found = validate(inputs)
    setErrors(found)
    if (Object.values(found).some(Boolean)) {
      send.reset()
      return
    }

    const fields = await antiBot.getFields()
    send.mutate({ name: inputs.name.trim(), commentaire: inputs.commentaire.trim(), note: inputs.note, ...fields }, {
      // Les champs ne sont vidés qu'une fois l'avis bien reçu.
      onSuccess: () => setInputs(emptyInputs),
      onError: (error) => console.error(error),
      onSettled: antiBot.reset,
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

          <Container.Column justifyContent="center" alignItems="flex-start" gap="40px" flex="1" onFocusCapture={antiBot.activate} onPointerDownCapture={antiBot.activate}>
            <Container.Column gap="20px" alignSelf="stretch" alignItems="flex-start">
              <Container.Column gap="7px" alignSelf="stretch">
                <Text.Label htmlFor="avis-nom">Prénom et nom*</Text.Label>
                <Form.Input
                  id="avis-nom"
                  type="text"
                  name="name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  aria-invalid={!!errors.name}
                  value={inputs.name}
                  onChange={handleChange}
                />
                <FieldError message={errors.name} />
              </Container.Column>
              <Container.Column gap="7px" alignSelf="stretch">
                <Text.Label htmlFor="avis-message">Votre avis*</Text.Label>
                <Form.TextArea
                  id="avis-message"
                  name="commentaire"
                  maxLength={3000}
                  required
                  aria-invalid={!!errors.commentaire}
                  value={inputs.commentaire}
                  onChange={handleChange}
                />
                <FieldError message={errors.commentaire} />
              </Container.Column>
              <Text.Label>Votre note*</Text.Label>
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
              <FieldError message={errors.note} />
            </Container.Column>
            <PrivacyNotice purpose="publier votre avis sur le site, après relecture" />
            {antiBot.fields}
            <Form.Button onClick={handleSend} disabled={busy} aria-busy={busy}>
              {busy ? "Envoi en cours…" : "Envoyer"}
            </Form.Button>
            {send.isSuccess && (
              <Text.Paragraph color={dark} role="status">
                Merci pour votre avis ! Il sera publié sur le site après validation par nos soins.
              </Text.Paragraph>
            )}
            {send.isError && (
              <Text.Paragraph color="red" role="alert">
                {submitErrorMessage(send.error)}
              </Text.Paragraph>
            )}
          </Container.Column>
        </Container.Row>
      </Container.Column>

      <LegalBar />
    </Container.Column>
  )
}

export default CommentFooter
