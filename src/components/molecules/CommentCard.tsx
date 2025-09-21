import React from 'react'
import { Container, Text, Visual } from '../atoms'
import { yellow, lightYellow, lightLightYellow } from '../../assets/color'
import { Comment } from '../../types/Commentaire.type'
import he from 'he'

type Props = {
  comment: Comment
  cardIndex: number
}

const CommentCard = ({ comment, cardIndex }: Props) => {
  const colors = [yellow, lightYellow, lightLightYellow]
  const backgroundColor = colors[cardIndex % colors.length]

  const formatComment = (raw?: string): string => {
    if (!raw) return '';

    let str = raw.trim();

    // Si la string est entourée de \" ... \"
    if (str.startsWith('\\"') && str.endsWith('\\"')) {
      str = str.slice(2, -2);
    }

    // Dé-escape des séquences JSON/JS
    str = str
      .replace(/\\\\/g, '\\')               // \\ -> \
      .replace(/\\"/g, '"')                 // \" -> "
      .replace(/\\'/g, "'")                 // \' -> '
      .replace(/\\n/g, '\n')                // \n -> retour à la ligne
      .replace(/\\r/g, '\r')                // \r -> retour chariot
      .replace(/\\t/g, '\t')                // \t -> tab
      .replace(/\\u([\da-fA-F]{4})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      );                                    // \u2764 -> ❤️ etc.

    // Decode des entités HTML (&eacute; &agrave; &nbsp; ...)
    return he.decode(str);
  }

  const displayedComment = formatComment(comment.commentaire)

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
        <Text.Paragraph>{comment.created ? new Date(comment.created).toLocaleDateString('fr-FR') : null}</Text.Paragraph>
      </Container.Row>

      <Container.Column alignItems="flex-start" gap="1.875rem" alignSelf="stretch">
        <Container.Row direction="row" justifyContent="center" alignItems="center" gap="15px" alignSelf="stretch">
          {[...Array(comment.note)].map((_, index) => (
            <Visual.Svg width={26} height={26} label="star" key={index} />
          ))}
        </Container.Row>

        <Text.Paragraph alignSelf="stretch" overflow="visible">
          {displayedComment}
        </Text.Paragraph>
      </Container.Column>
    </Container.Column>
  )
}

export default CommentCard
