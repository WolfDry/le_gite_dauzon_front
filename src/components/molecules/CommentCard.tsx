import React from 'react'
import { Container, Text, Visual } from '../atoms'
import { yellow, lightYellow, lightLightYellow } from '../../assets/color'
import { Comment } from '../../types/App.type'

type Props = {
  comment: Comment
  cardIndex: number
}

const CommentCard = ({ comment, cardIndex }: Props) => {
  const colors = [yellow, lightYellow, lightLightYellow]
  const backgroundColor = colors[cardIndex % colors.length]

  return (
    <Container.Column
      padding="1.875rem 2.5rem"
      marginBottom="2.19rem"
      alignItems="flex-start"
      gap="1.25rem"
      alignSelf="stretch"
      borderRadius="1.25rem"
      background={backgroundColor}
      boxShadow="4px 4px 20px 0 rgba(23, 28, 25, 0.10)"
    >
      <Container.Row direction="row" justifyContent="space-between" alignItems="flex-start" alignSelf="stretch">
        <Text.Paragraph fontWeight="700">{comment.name}</Text.Paragraph>
        <Text.Paragraph>{comment.date.toDateString()}</Text.Paragraph>
      </Container.Row>

      <Container.Column alignItems="flex-start" gap="1.875rem" alignSelf="stretch">
        <Container.Row direction="row" justifyContent="center" alignItems="center" gap="15px" alignSelf="stretch">
          {[...Array(comment.stars)].map((_, index) => (
            <Visual.Svg width={26} height={26} label="star" key={index} />
          ))}
        </Container.Row>

        <Text.Paragraph alignSelf="stretch">
          {comment.text}
        </Text.Paragraph>
      </Container.Column>
    </Container.Column>
  )
}

export default CommentCard
