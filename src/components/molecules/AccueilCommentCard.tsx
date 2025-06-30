import React from 'react'
import { Container, Text, Visual } from '../atoms'
import { Comment } from '../../types/Commentaire.type'
import { dark, lightGreen } from '../../assets/color'

type Props = {
  comment: Comment | null
}

const AccueilCommentCard = ({ comment }: Props) => {

  return (
    <Container.Column height="29.3rem" padding="1.875rem 2.7vw" justifyContent="space-between" borderRadius="1.25rem" flex="1 0 0" background={lightGreen} boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.20)">
      <Container.Row direction="row" justifyContent="center">
        <Visual.Svg label="star" width={25} height={25} />
        <Visual.Svg label="star" width={25} height={25} />
        <Visual.Svg label="star" width={25} height={25} />
        <Visual.Svg label="star" width={25} height={25} />
        <Visual.Svg label="star" width={25} height={25} />
      </Container.Row>
      <Visual.Svg label="quote" />
      <Text.Paragraph>
        {comment && comment.commentaire}
      </Text.Paragraph>
      <Container.Row height="1px" alignSelf="stretch" background={dark} />
      <Container.Column alignItems="flex-end" gap="5px">
        <Text.Name fontWeight="700">
          {comment && comment.name}
        </Text.Name>
        <Text.Name>
          {comment && new Date(comment.created).toLocaleDateString('fr-FR')}
        </Text.Name>
      </Container.Column>
    </Container.Column>
  )
}

export default AccueilCommentCard