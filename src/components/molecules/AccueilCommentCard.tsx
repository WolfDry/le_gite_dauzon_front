import { Container, Text, Visual } from '../atoms'
import { Comment } from '../../types/Commentaire.type'
import { dark, lightGreen } from '../../assets/color'

type Props = {
  comment: Comment | null
}

const MAX_NOTE = 5

const AccueilCommentCard = ({ comment }: Props) => {
  const note = Math.min(MAX_NOTE, Math.max(0, Math.round(comment?.note ?? 0)))

  return (
    <Container.Column height="29.3rem" padding="1.875rem 2.7vw" justifyContent="space-between" borderRadius="1.25rem" flex="1 0 0" background={lightGreen} boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.20)">
      <Container.Row direction="row" justifyContent="center" role="img" aria-label={`Note : ${note} sur ${MAX_NOTE}`}>
        {Array.from({ length: MAX_NOTE }, (_, index) => (
          <Visual.Svg key={index} label={index < note ? "star" : "empty_star"} width={25} height={25} />
        ))}
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
          {comment && comment.created && new Date(comment.created).toLocaleDateString('fr-FR')}
        </Text.Name>
      </Container.Column>
    </Container.Column>
  )
}

export default AccueilCommentCard