import { Container, Text } from '../components/atoms'
import HeroBanner from '../components/molecules/HeroBanner'
import { lightLightYellow } from '../assets/color'
import CommentCard from '../components/molecules/CommentCard'
import CommentFooter from '../components/molecules/CommentFooter'
import { Comment } from '../types/Commentaire.type'
import { useCommentaires } from '../services/queries'
import { pageMeta } from '../seo'

export const meta = () => pageMeta({
  title: "Livre d'or : avis de nos vacanciers",
  description: "Les avis des vacanciers qui ont séjourné au Gîte d'Auzon, à Joyeuse en Ardèche méridionale. Vous y avez passé un séjour ? Laissez-nous un commentaire.",
  path: '/commentaire',
})

const Commentaire = () => {

  const { data: validComments, isPending, isError } = useCommentaires()

  return (
    <Container.Column background={lightLightYellow}>
      <HeroBanner height="40vh" paddingTop="60px" text="Ils nous ont fait confiance" />
      <Container.Row padding="3.75rem 6.25rem 1.25rem 6.25rem" justifyContent="center" alignItems="center" gap="10px" alignSelf="stretch">
        <Text.Paragraph flex="1 0 0">
          {`Retrouvez ici tous les avis laissés par nos anciens vacanciers. Leurs retours d’expérience reflètent l’ambiance conviviale, le confort du gîte et la qualité de l’accueil que nous mettons au cœur de chaque séjour.

Vous hésitez encore ? Leurs témoignages vous aideront à vous faire une idée précise de ce qui vous attend au Gîte d’Auzon, en plein cœur de l’Ardèche méridionale.`}
        </Text.Paragraph>
      </Container.Row>
      <Container.Wrap padding="3.75rem 6.25rem" mPadding="1.25rem 1.25rem 2.5rem 1.25rem" gap="2.1875rem" mColumnGap="3.125rem" alignSelf="stretch">
        {isPending && <Text.Paragraph textAlign="center" role="status">Chargement des avis…</Text.Paragraph>}
        {isError && <Text.Paragraph textAlign="center" role="alert">Les avis n'ont pas pu être chargés. Rechargez la page pour réessayer.</Text.Paragraph>}
        {validComments && validComments.map((comment: Comment, index: number) => {
          return (<CommentCard key={comment.id} comment={comment} cardIndex={index} />)
        })}
      </Container.Wrap>
      <CommentFooter />
    </Container.Column>
  )
}

export default Commentaire