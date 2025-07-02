import React, { useEffect, useState } from 'react'
import { Container, Text } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import { lightLightYellow } from '../assets/color'
import CommentCard from '../components/molecules/CommentCard'
import CommentFooter from '../components/molecules/CommentFooter'
import { Comment } from '../types/Commentaire.type'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../types/Redux.type'
import { getAllCommentaires } from '../stores/thunks/commentaireThunks'

const Commentaire = () => {

  const dispatch = useDispatch<AppDispatch>()
  const comments = useSelector((state: any) => state.comment.commentaires ?? [])
  const [validComments, setValidComments] = useState(comments)

  useEffect(() => {
    dispatch(getAllCommentaires())
  }, [dispatch])

  useEffect(() => {
    setValidComments(comments.filter((comment: Comment) => comment.verif))
  }, [comments])

  return (
    <Container.Column background={lightLightYellow}>
      <HeroBanner height="40vh" paddingTop="60px" text="Ils nous ont fait confiance" />
      <Container.Row padding="3.75rem 6.25rem 1.25rem 6.25rem" justifyContent="center" alignItems="center" gap="10px" alignSelf="stretch">
        <Text.Paragraph flex="1 0 0">
          {`Retrouvez ici tous les avis laissés par nos anciens vacanciers. Leurs retours d’expérience reflètent l’ambiance conviviale, le confort du gîte et la qualité de l’accueil que nous mettons au cœur de chaque séjour.

Vous hésitez encore ? Leurs témoignages vous aideront à vous faire une idée précise de ce qui vous attend au Gîte d’Auzon, en plein cœur de l’Ardèche méridionale.`}
        </Text.Paragraph>
      </Container.Row>
      <Container.Masonry columnCount={3} padding="3.75rem 6.25rem" mPadding="1.25rem 1.25rem 2.5rem 1.25rem" columnGap="2.1875rem" mColumnGap="3.125rem" alignSelf="stretch">
        {validComments && validComments.map((comment: Comment, index: number) => {
          return (<CommentCard comment={comment} cardIndex={index} />)
        })}
      </Container.Masonry>
      <CommentFooter />
    </Container.Column>
  )
}

export default Commentaire