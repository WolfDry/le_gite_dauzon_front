import React, { useState } from 'react'
import { Action, Container, Text, Visual } from '../atoms'
import { yellow, lightYellow, lightLightYellow } from '../../assets/color'
import { Comment } from '../../types/Commentaire.type'
import he from 'he'
import Modal from './Modal'

type Props = {
  comment: Comment
  cardIndex: number
}

const CommentCard = ({ comment, cardIndex }: Props) => {
  const colors = [yellow, lightYellow, lightLightYellow]
  const backgroundColor = colors[cardIndex % colors.length]
  const [displayModal, setDisplayModal] = useState(false)

  const formatComment = (raw?: string): string => {
    if (!raw) return '';

    let str = raw.trim();

    if (str.startsWith('\\"') && str.endsWith('\\"')) {
      str = str.slice(2, -2);
    }

    str = str
      .replace(/\\\\/g, '\\')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\n/g, '\n')
      .replace(/\\r/g, '\r')
      .replace(/\\t/g, '\t')
      .replace(/\\u([\da-fA-F]{4})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      );

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
      width="34.2rem"
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

        <Text.Paragraph alignSelf="stretch">
          {displayedComment}
        </Text.Paragraph>
        {displayedComment.length > 300 &&
          <Action.Button padding="0.625rem 1.25rem" borderRadius="0.625rem" background={"black"} color="white" fontWeight="600" fontSize="0.875rem" cursor="pointer" onClick={() => setDisplayModal(true)}>
            Voir plus
          </Action.Button>
        }
      </Container.Column>
      {displayModal &&
        <Modal comment={displayedComment} closeModal={() => setDisplayModal(false)} />
      }
    </Container.Column>
  )
}

export default CommentCard
