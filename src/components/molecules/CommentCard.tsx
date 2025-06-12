import React from 'react'
import { Container, Text, Visual } from '../atoms'
import { Commentaire } from '../../types/Commentaire.type'
import { dark, lightGreen } from '../../assets/color'

type Props = {
  comment: Commentaire
}

const CommentCard = ({ comment }: Props) => {
  return (
    <Container.Column height="29.3rem" padding="1.875rem 2.7vw" justifyContent="space-between" borderRadius="1.25rem" flex="1 0 0" background={lightGreen} boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.20)">
      <Container.Row justifyContent="center">
        <Visual.Svg label="star" width={25} height={25} />
        <Visual.Svg label="star" width={25} height={25} />
        <Visual.Svg label="star" width={25} height={25} />
        <Visual.Svg label="star" width={25} height={25} />
        <Visual.Svg label="star" width={25} height={25} />
      </Container.Row>
      <Visual.Svg label="quote" />
      <Text.Paragraph>
        {comment.commentaire}
      </Text.Paragraph>
      <Container.Row height="1px" alignSelf="stretch" background={dark} />
      <Container.Column alignItems="flex-end" gap="5px">
        <Text.Name>
          {comment.nom + " " + comment.prenom}
        </Text.Name>
        <Text.Name>
          {comment.date}
        </Text.Name>
      </Container.Column>
    </Container.Column>
  )
}

export default CommentCard